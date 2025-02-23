"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const GameCard = ({game} : { 
  game : {
    id : string;
    title : string;
    name : string;
    image : string;
    genre : string;
  }
}) => {

  useGSAP(() => {
    gsap.to("#card", {
      scrollTrigger: {
        trigger: "#card",
        start: "top 80%",
        end: "center center",
        scrub: true,
        toggleActions : "play none none none"
      },
      opacity: 1,
      scale: 1,
      duration: .7,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);


  return (
    <div id="card" className="max-w-sm group opacity-0 scale-75  bg-black text-white rounded-lg shadow-lg p-4 
    transition-all duration-300 overflow-hidden">
      
      <Link href={`/events?query=${game.name}`}  className="relative overflow-hidden">
        <Image
          src={game.image}
          width={300}
          quality={100}
          height={500}
          alt="Garena Free Fire Max"
          className="rounded-lg w-full h-80  group-hover:scale-105 transition-all duration-200 ease-linear overflow-hidden  object-cover"
        />
        {/* Discount tag */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm px-2 py-1 rounded">
          <Star size={10} color="black" />
        </div>
      </Link>

      <div className="p-4">
        <h2 className="text-lg  font-bold">{game.title}</h2>
        <p className="text-sm text-gray-400">{game.genre}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-400 line-through">win and raise</span>
          <Link href={`/events?query=${game.name}`} className="text-xl opacity-50 group-hover:opacity-100 font-bold">play</Link>
        </div>
      </div>

      <div className="h-px w-0 transition-all duration-1000 bg-white rounded-lg group-hover:w-full"/>
    </div>
  );
};

export default GameCard;
