// "use client";

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';


// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const descriptionRef = useRef(null);

//   useGSAP(() => {
//     // GSAP Animations
//     gsap.from(titleRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.5,
//       ease: 'power3.out',
//       delay: 0.5,
//     });

//     gsap.from(subtitleRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.5,
//       ease: 'power3.out',
//       delay: 1,
//     });

//     gsap.from(descriptionRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.5,
//       ease: 'power3.out',
//       delay: 1.5,
//     });

//     gsap.to(heroRef.current, {
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         end: 'bottom top',
//         scrub: true,
//       },
//       y: 100,
//     });
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className=" relative h-screen max-sm:h-[60vh]  flex items-center justify-center   overflow-hidden"
//     >
//       {/* Background Video */}


//       {/* Overlay for better text visibility */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

//       {/* Text Content */}
//       <div className="relative text-center  select-none z-10 text-white">
//         <h1
//           ref={titleRef}
//           className="text-3xl md:text-6xl lg:text-7xl mb-4 font-teko font-bold  text-center gap-5 "
//         >
//           DYNAMIC  ARENA
//         </h1>
//         <h2
//           ref={subtitleRef}
//           className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 font-gaming"
//         >
//           Join the Ultimate Tournament
//         </h2>
//         <p
//           ref={descriptionRef}
//           className="text-xl text-gray-100/50  md:text-2xl lg:text-3xl font-medium font-gaming"
//         >
//           Compete. Win. Dominate.
//         </p>
//       </div>


//     </div>
//   );
// };

// export default Hero;
"use client";

import React from 'react';
import { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Gamepad2, 
  ChevronRight,
  Crown,
  TrophyIcon
} from 'lucide-react';
import Link from 'next/link';
import { tournaments } from '@/lib/utils';
import UpcomingTournamentCard from './UpcomingTournament';
import { Tournament } from '@/sanity/types';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <div className="bg-gradient-to-br py-40 from-gray-50 via-white to-gray-100 min-h-screen flex items-center   relative overflow-hidden">
      
      <div
        className="absolute top-0  left-0 w-full h-full  bg-cover z-0"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute  top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="max-w-7xl  mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Same as before */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight uppercase">
                Dynamic
                <span className="bg-clip-text text-transparent bg-gradient-to-r  uppercase">
                  Arena
                </span>
              </h1>
              <p className="text-xl text-gray-200">
                Where Legends Rise and Champions Emerge
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600">Tournaments</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Pro Players</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <Gamepad2 className="w-8 h-8 text-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Game Titles</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/events" className="bg-yellow-500 hover:bg-yellow-700 text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg">
                Join Tournament <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href={"/leaderboard"} className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg border border-gray-200">
                Leaderboard <TrophyIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Featured Matches</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Crown className="w-4 h-4 mr-1" />
                  Top Tournaments
                </div>
              </div>
              
              <div className="space-y-6">
                {tournaments.map((match, index) => (
                  <UpcomingTournamentCard key={index} tournament={match}/>
                ))}
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              {['FPS', 'MOBA', 'Battle Royale', 'Racing'].map((category, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-gray-50 transition-all shadow-lg border border-gray-100"
                >
                  <div className="text-gray-900 font-semibold">{category}</div>
                  <div className="text-gray-600 text-sm">View Games</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;