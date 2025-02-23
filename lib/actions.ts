"use server";

import { auth } from "@/auth";
import { writeClient } from "@/sanity/lib/write-client";
import { Team } from "@/sanity/types";

export const createTeam = async (formData: FormData) => {
    try {
        const session = await auth();

        if (!session?.player?._id) {
            throw new Error("Unauthorized: Please login first");
        }

        // Extract and validate form data
        const teamName = formData.get("teamName") as string;
        const logoFile = formData.get("logo") as File;
        const playerIds = formData.getAll("players") as string[];

        if (!teamName?.trim()) {
            throw new Error("Team name is required");
        }

        // Upload logo if provided
        let logoAsset;
        if (logoFile && logoFile.size > 0) {
            logoAsset = await writeClient.assets.upload("image", logoFile);
        }

        // Filter out empty player IDs and create unique set including owner
        const validPlayerIds = [...new Set([session.player._id, ...playerIds.filter(id => !!id)])];

        // Create team document
        const teamDoc = {
            _type: "team",
            name: teamName,
            owner: {
                _type: "reference",
                _ref: session.player._id
            },
            logo: logoAsset ? {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: logoAsset._id
                }
            } : undefined,
            players: validPlayerIds.map((id) => ({
                _type: "reference",
                _ref: id
            })),
            totalPoints: 0,
            wins: 0,
            createdAt: new Date().toISOString()
        };

        // Create team first
        const newTeam = await writeClient.create(teamDoc);

        if (!newTeam._id) {
            throw new Error("Failed to create team: No ID returned");
        }

        // Update each player's currentTeam field
        const updatePromises = validPlayerIds.map(playerId => 
            writeClient
                .patch(playerId)
                .set({
                    currentTeam: {
                        _type: "reference",
                        _ref: newTeam._id,
                        _weak: false // Ensure it's not a weak reference
                    }
                })
                .commit() // Add commit() here
        );

        // Wait for all player updates to complete
        const updatedPlayers = await Promise.all(updatePromises);

        // Verify updates
        const successfulUpdates = updatedPlayers.every(player => player._id);
        
        if (!successfulUpdates) {
            // If player updates failed, attempt to rollback team creation
            await writeClient.delete(newTeam._id);
            throw new Error("Failed to update player references");
        }

        return {
            status: "SUCCESS",
            result: {
                team: newTeam,
                updatedPlayers: validPlayerIds,
                teamId: newTeam._id
            }
        };

    } catch (error: any) {
        console.error("Error creating team:", error);
        return {
            status: "ERROR",
            message: error.message || "Failed to create team"
        };
    }
}