    "use server";

    import { auth } from "@/auth";
    import { client } from "@/sanity/lib/client";
    import { writeClient } from "@/sanity/lib/write-client";
    import { team } from "@/sanity/schemaTypes/team";
    import { revalidatePath } from "next/cache";
    import { redirect } from "next/navigation";

    export const createTeam = async (formData: FormData) => {
        try { 
            const session = await auth();

            if (!session?.player?._id) redirect("/login");



            const teamName = formData.get("teamName") as string;
            const logoFile = formData.get("logo") as File;
            const playerIds = formData.getAll("players") as string[];

            let logoAsset;
            if (logoFile && logoFile.size > 0) {
                logoAsset = await writeClient.assets.upload("image", logoFile);
            }

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
                        _ref: logoAsset._id // ✅ FIXED: Corrected image reference
                    }
                } : undefined,
                players: playerIds.filter((id) => !!id).map((id) => ({
                    _type: "reference",
                    _ref: id
                })),
                totalPoints: 0,
                wins: 0
            };

            console.log(teamDoc)
            const result = await writeClient.withConfig({ useCdn: false }).create(teamDoc);
            
            revalidatePath("/team/create");
            return {
                STATUS : "SUCCESS",
                result
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
