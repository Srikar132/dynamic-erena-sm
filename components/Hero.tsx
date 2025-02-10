"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    // GSAP Animations
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5,
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1,
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1.5,
    });

    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className=" relative h-screen  flex items-center justify-center   overflow-hidden"
    >
      {/* Background Video */}
      <div
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
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

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Text Content */}
      <div className="relative text-center  select-none z-10 text-white">
        <h1
          ref={titleRef}
          className="text-3xl md:text-6xl lg:text-7xl mb-4 font-teko font-bold  text-center gap-5 "
        >
          DYNAMIC  ARENA
        </h1>
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 font-gaming"
        >
          Join the Ultimate Tournament
        </h2>
        <p
          ref={descriptionRef}
          className="text-xl text-gray-100/50  md:text-2xl lg:text-3xl font-medium font-gaming"
        >
          Compete. Win. Dominate.
        </p>
      </div>


    </div>
  );
};

export default Hero;