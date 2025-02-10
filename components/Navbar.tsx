"use client";

import { navigation } from '@/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import MenuSvg from "@/assets/svg/MenuSvg";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

function Navbar() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // GSAP animation for header entrance
    useGSAP(() => {
        gsap.from("#header", {
            y: -100,
            ease: "power3.out",
            duration: 1,
        });
    }, []);

    // GSAP animation for mobile menu
    useGSAP(() => {
        if (openNavigation) {
            gsap.from("nav", {
                opacity: 0,
                y: -50,
                duration: 0.5,
                ease: "power3.out",
            });
            gsap.from("nav a", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    }, [openNavigation]);

    // Toggle mobile navigation
    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

    // Close mobile navigation when a link is clicked
    const handleLinkClick = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        }
    };



    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
      window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
        <header
            id="header"
            className={`fixed top-0 left-0 w-full z-50   backdrop-blur-sm transition-colors ${
                openNavigation ? "bg-n-8" : ""
            }  ${scrolled 
                ? 'bg-black shadow-lg backdrop-blur-sm bg-opacity-90' 
                : 'bg-transparent pt-10 px-3'
              } transition-all duration-1000 ease-in-out`}
        >
            <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 lg:py-1">
                {/* Logo */}
                <Link href={"/"} className="w-[12rem] invert overflow-hidden xl:mr-8 flex items-center gap-2">
                    <Image
                        quality={100}
                        src={"/logo.jpg"}
                        className="object-cover"
                        alt={"Logo"}
                        width={100}
                        height={5}
                    />
                </Link>

                {/* Navigation */}
                <nav
                    className={`${
                        openNavigation ? 'flex' : 'hidden'
                    } fixed top-[4.75rem]  left-0 right-0 bottom-0 w-full bg-n-8 max-lg:h-[90vh]  backdrop-blur-sm lg:static lg:flex lg:bg-transparent`}
                >
                    <div className="relative  z-2 max-lg:m-auto flex flex-col items-center justify-center lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className={`block relative text-2xl uppercase tracking-wider text-n-1 transition-colors  px-6 py-6 md:py-8 lg:mr-0.25 lg:text-gray-200 lg:hover:text-white ${
                                    item?.isMobile ? "lg:hidden" : ""
                                }`}
                                onClick={handleLinkClick}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Join Button */}
                <Button
                    className="relative hidden shadow-none text-2xl bg-white tracking-widest font-bold lg:inline-flex hover:bg-white/50 items-center justify-center py-3 px-8 overflow-hidden text-n-8 rounded-full group  transition-all"
                    onClick={() => {}}
                >
                    <span className="relative z-10">Join</span>
                    <span className="absolute inset-0 bg-n-1 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                </Button>

                {/* Mobile Menu Button */}
                <Button
                    className="ml-auto lg:hidden p-2"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </header>
    );
}

export default Navbar;