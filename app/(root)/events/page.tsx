"use client";

import React, { useState } from "react";
import { tournamentData } from "../../../utils/index";
import { FilterOptions } from "@/types/type";
//haa vintunna nannaa

import {
  CalendarDays,
  Gamepad2,
  Search,
  Timer,
  Trophy,
  Users,
  Swords,
  Flame,
  Target,
  Sparkles,
  ChevronDown,
  Shield,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";

function page() {
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const [selectedStatus, setselectedStatus] = useState<string>("all");
  const [prizeRange, setPrizeRange] = useState<[number, number]>([0, 100000]);
  const [entryFeeRange, setEntryFeeRange] = useState<[number, number]>([0, 1000]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  type GameType = "free-fire" | "Pubg" | "chess" | "all";

  const filterOptions: FilterOptions = {
    game: ["all", "free-fire", "Pubg", "chess"],
    status: [
      "all",
      "upcoming",
      "registration-open",
      "registration-closed",
      "in-progress",
      "completed",
    ],
    prizePool: { min: 0, max: 100000 },
    entryFee: { min: 0, max: 1000 },
  };

  const gameImages:  Record<GameType, string> = {
    "free-fire": "/free-fire.jpg",
    "Pubg": "/free-fire.jpg",
    "chess": "/free-fire.jpg",
    "all": "/free-fire.jpg"
  };

  const getGameImage = (gameName: string) :string => {
    return gameImages[gameName as GameType] || gameImages.all;
  };

  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      "upcoming": "bg-gray-800",
      "registration-open": "bg-gray-800",
      "registration-closed": "bg-gray-900",
      "in-progress": "bg-black",
      "completed": "bg-zinc-900",
    };
    return statusColors[status] || "bg-gray-800";
  };

  const formDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const filteredTournaments = tournamentData.filter((tournament) => {
    const matchesGame =
      selectedGame === "all" || tournament.game === selectedGame;
    const matchesStatus =
      selectedStatus === "all" || tournament.status === selectedStatus;
    const matchesPrizePool =
      tournament.prizePool >= prizeRange[0] &&
      tournament.prizePool <= prizeRange[1];
    const matchesEntryFee =
      tournament.entryFee >= entryFeeRange[0] &&
      tournament.entryFee <= entryFeeRange[1];
    const matchesSearch = tournament.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return (
      matchesGame &&
      matchesStatus &&
      matchesPrizePool &&
      matchesEntryFee &&
      matchesSearch
    );
  });

  return (
    <div className="min-h-screen bg-zinc-100/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-[5.75rem]"
      >
        <div className="bg-black/90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="p-6 flex items-center justify-between">
              <motion.h1 
                className="text-4xl font-bold text-white flex items-center gap-5"
                whileHover={{ scale: 1.05 }}
              >
                <Gamepad2 className="w-16 h-16 italic text-yellow-500/50" />
                <span className="bg-gradient-to-r from-gray-100 italic to-gray-400 bg-clip-text text-transparent">
                  Gaming Tournaments
                </span>
              </motion.h1>
              <motion.div 
                className="flex gap-4"
                whileHover={{ scale: 1.02 }}
              >
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap gap-6 items-center">
              <motion.div 
                className="flex items-center bg-black/70 rounded-lg px-4 py-2 shadow-lg border border-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <Search className="w-6 h-6 text-yellow-500" />
                <input
                  type="text"
                  placeholder="Search epic tournaments..."
                  className="border-none px-6 py-1 focus:outline-none text-lg bg-transparent text-gray-300 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="relative ">
                  <motion.button
                    className="bg-black/70 px-6 py-2 rounded-lg shadow-lg border border-gray-800 flex items-center gap-2 text-gray-300"
                    onClick={() => setIsGameDropdownOpen(!isGameDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Swords className="w-5 h-5 text-yellow-500" />
                    {selectedGame.charAt(0).toUpperCase() + selectedGame.slice(1)}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isGameDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  {isGameDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute mt-2 w-48 bg-black/90 rounded-lg shadow-lg border border-gray-800 z-10"
                    >
                      {filterOptions.game.map((game) => (
                        <button
                          key={game}
                          className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-300"
                          onClick={() => {
                            setSelectedGame(game);
                            setIsGameDropdownOpen(false);
                          }}
                        >
                          {game.charAt(0).toUpperCase() + game.slice(1)}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="relative ">
                  <motion.button
                    className="bg-black/70 px-6 py-2 rounded-lg shadow-lg border border-gray-800 flex items-center gap-2 text-gray-300"
                    onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Target className="w-5 h-5 text-yellow-500" />
                    {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isStatusDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  {isStatusDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute mt-2 w-48 bg-black/90 rounded-lg shadow-lg border border-gray-800 z-50"
                    >
                      {filterOptions.status.map((status) => (
                        <button
                          key={status}
                          className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-300"
                          onClick={() => {
                            setselectedStatus(status);
                            setIsStatusDropdownOpen(false);
                          }}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center gap-4 bg-black/70 p-4 rounded-lg shadow-lg border border-gray-800">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-400">Prize Pool:</span>
                    <input
                      title="m"
                      type="range"
                      min={filterOptions.prizePool.min}
                      max={filterOptions.prizePool.max}
                      value={prizeRange[1]}
                      onChange={(e) =>
                        setPrizeRange([prizeRange[0], parseInt(e.target.value)])
                      }
                      className="w-36 accent-yellow-500"
                    />
                    <span className="text-yellow-500 font-semibold">
                      ${prizeRange[1].toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-400">Entry Fee:</span>
                    <input
                      title="m"
                      type="range"
                      min={filterOptions.entryFee.min}
                      max={filterOptions.entryFee.max}
                      value={entryFeeRange[1]}
                      onChange={(e) =>
                        setEntryFeeRange([
                          entryFeeRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-36 accent-yellow-500"
                    />
                    <span className="text-yellow-500 font-semibold">
                      ${entryFeeRange[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {filteredTournaments.map((tournament, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden "
              >
                <div className=" border rounded-lg border-gray-200 bg-slate-50 hover:border-yellow-500/50 transition-all duration-300 shadow-lg">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={getGameImage(tournament.game)}
                      alt={tournament.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <span
                      className={`${getStatusColor(
                        tournament.status
                      )} absolute top-4 right-4 px-4 py-1 rounded-full font-semibold text-sm tracking-wider text-yellow-500 backdrop-blur-sm`}
                    >
                      {tournament.status.replace("-", " ")}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Flame className="w-6 h-6 text-yellow-500" />
                      {tournament.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-900">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span>Prize Pool: </span>
                        <span className="text-red-950 font-bold">
                          ${tournament.prizePool.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-900">
                        <Users className="w-5 h-5 text-yellow-500" />
                        <span>Teams: </span>
                        <span className="text-gray-800 font-bold">
                          {tournament.registeredTeams.length}/{tournament.maxTeams}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-900">
                        <CalendarDays className="w-5 h-5 text-yellow-500" />
                        <span>Starts: </span>
                        <span className="text-gray-900">
                          {formDate(tournament.startDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-900">
                        <Timer className="w-5 h-5 text-yellow-500" />
                        <span>Registration Deadline: </span>
                        <span className="text-gray-900">
                          {formDate(tournament.registrationDeadline)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-900">Entry Fee:</span>
                        <span className="text-gray-900 font-bold">
                          ${tournament.entryFee}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 hover:bg-gray-800 text-yellow-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-700"
                      >
                        <Sparkles className="w-5 h-5" />
                        Register Now
                      </motion.button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center"
                            >
                              <img
                                src={``}
                                alt={`Player ${i}`}
                                className="w-full h-full rounded-full"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-700">
                          +{tournament.registeredTeams.length * 3} players registered
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-500 rounded-full blur-2xl opacity-30" />
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gray-400 rounded-full blur-2xl opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-black text-yellow-500 p-4 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300 border border-gray-800"
        >
          <Gamepad2 className="w-6 h-6" />
        </motion.button>

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-5" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-5" />
          
          {/* Additional gaming-themed decorative elements */}
          <div className="absolute top-1/2 right-1/4 w-32 h-32">
            <Shield className="w-full h-full text-gray-800 opacity-5" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40">
            <Swords className="w-full h-full text-gray-800 opacity-5" />
          </div>
          
          {/* Animated gradient lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent" />
          </div>
        </div>

        {/* Loading State Overlay - Show when data is loading */}
        {false && ( // Replace with actual loading state
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Gamepad2 className="w-16 h-16 text-yellow-500" />
              </motion.div>
              <p className="mt-4 text-gray-300 text-lg">Loading Tournaments...</p>
            </div>
          </div>
        )}

        {filteredTournaments.length === 0 && (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No Tournaments Found</h3>
              <p className="text-gray-500">
                Try adjusting your filters or search criteria to find more tournaments.
              </p>
              <button
                onClick={() => {
                  setSelectedGame("all");
                  setselectedStatus("all");
                  setPrizeRange([0, 100000]);
                  setEntryFeeRange([0, 1000]);
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2 bg-gray-900 text-yellow-500 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          </div>
        )}

        {/* Tooltip Component */}
        <div className="fixed top-0 left-0 pointer-events-none" style={{ zIndex: 1000 }}>
          <motion.div
            initial={false}
            className="bg-gray-900 text-gray-100 px-4 py-2 rounded-lg border border-gray-800 shadow-xl"
            style={{
              // position: 'absolute',
              // display: 'none', // Show/hide based on hover state
            }}
          >
            Tooltip content here
          </motion.div>
        </div>
      </motion.div>

      {/* Game Preview Modal - Add your modal implementation here */}
      {/* 
      <Modal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tournament Preview</h2>
          // Add your modal content here
        </div>
      </Modal>
      */}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default page;