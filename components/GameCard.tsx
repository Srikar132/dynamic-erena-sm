import React from 'react';
import Image from 'next/image';

const GameCard = ({ game } : {game : any}) => {
  return (
    <li className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-blue-700 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition duration-300"></div>
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 flex flex-col items-center border border-gray-700/50">
        {/* Main Image Container with Overlay */}
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
          <Image
            src={game.mainImage}
            height={500}
            width={500}
            alt={game.name}
            quality={100}
            className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-6 w-full z-20">

          {/* Game Title */}
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center uppercase tracking-wider">
            {game.name}
          </h2>

          {/* Game Info with Gaming Style */}
          <div className="grid grid-cols-1 gap-4 w-full bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium">GENRE</span>
              <span className="text-blue-400 font-bold">Battle Royale</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium">RELEASE DATE</span>
              <span className="text-blue-400 font-bold">December 4, 2017</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium">ACTIVE PLAYERS</span>
              <span className="text-blue-400 font-bold">50M+</span>
            </div>
          </div>

          {/* Play Button with Gaming Style */}
          <a
            href={game.url}
            className="relative w-full group/button"
          >
            {/* Button Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover/button:opacity-100 blur transition duration-300"></div>
            
            {/* Button Content */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 text-center font-black text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover/button:shadow-[0_0_25px_rgba(37,99,235,0.65)]">
              Play Now
            </div>
          </a>
        </div>
      </div>
    </li>
  );
};

export default GameCard;