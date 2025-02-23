"use client";

import { useToast } from '@/hooks/use-toast';
import { createTeam } from '@/lib/actions';
import { teamCreateFormSchema } from '@/lib/validation';
import { Player } from '@/sanity.types';
import { Router, Sword, Trophy, Upload, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { z } from 'zod';

function TeamClient({ availablePlayers }: { availablePlayers: Player[] }) {
  const { toast } = useToast();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const data = {
        teamName: formData.get("teamName"),
        logo: formData.get("logo"),
        players: selectedPlayers,
      };


      await teamCreateFormSchema.parseAsync(data);


      const result = await createTeam(formData);

      if(result.status === "SUCCESS") {
          toast({
            title: "Sucess",
            description: "Team crated Success fully",
          })
          router.push(`/team/${result.result?.teamId}`);
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Error",
        description: (error as any)?.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-5 text-xl md:p-8">
      <form action={handleSubmit} className="space-y-6">
        {/* Team Name */}
        <div className="space-y-2">
          <label className="flex items-center text-lg font-semibold gap-2">
            <Sword className="w-5 h-5" />
            Team Name
          </label>
          <Input
            type="text"
            required
            placeholder="Enter your Team Name"
            name="teamName"
          />
          {errors.teamName && (
            <p className="text-red-500 text-sm">{errors.teamName}</p>
          )}
        </div>

        {/* Team Logo */}
        <div className="space-y-2">
          <label className="flex items-center text-lg font-black gap-2">
            <Upload className="w-5 h-5" />
            Team Logo
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-yellow-500 border-dashed rounded-lg cursor-pointer bg-gray-900/50 transistion-all">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 text-yellow-500 mb-4" />
                  <p className="text-sm text-yellow-300">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              )}
              <input
                name="logo"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>
          </div>
          {errors.logo && (
            <p className="text-red-500 text-sm">{errors.logo}</p>
          )}
        </div>

        {/* Team Players */}
        <div className="space-y-4">
          <label className="flex items-center text-lg font-black gap-2">
            <Users className="w-5 h-5" />
            Team Players
          </label>
          {[0, 1, 2].map((_, i) => (
            <div className="flex gap-4" key={_}>
              <select
                name="players"
                className="flex-1 bg-gray-900/50 border border-yellow-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                onChange={(e) => {
                  const newPlayers = [...selectedPlayers];
                  newPlayers[i] = e.target.value;
                  setSelectedPlayers(newPlayers);
                }}
              >
                <option value="">Select player {i + 1}</option>
                {availablePlayers
                  .filter((player) => !selectedPlayers.includes(player._id) || selectedPlayers[i] === player._id)
                  .map((player) => (
                    <option key={player._id} value={player._id}>
                      {player.name}
                    </option>
                  ))}
              </select>
              <div className="w-16 h-12 flex items-center justify-center text-yellow-400 font-bold border border-purple-500/30 rounded-lg bg-gray-900/50">
                #{i + 1}
              </div>
            </div>
          ))}
          {errors.players && (
            <p className="text-red-500 text-sm">{errors.players}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Creating Team...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" />
              CREATE TEAM
            </div>
          )}
        </button>
      </form>
    </div>
  );
}

export default TeamClient;

const Input = ({ name, type, required, placeholder, Icon }: {
  name: string;
  type: string;
  required: boolean;
  placeholder: string;
  Icon?: ReactNode;
}) => (
  <div className="relative">
    {Icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{Icon}</div>}
    <input
      name={name}
      type={type}
      required={required}
      className={`w-full bg-white/50 border border-purple-500/30 rounded-lg px-4 py-3 text-black font-bold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all
        ${Icon && "pl-10"}
      `}
      placeholder={placeholder}
    />
  </div>
);