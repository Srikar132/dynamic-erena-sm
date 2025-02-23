"use client";
import { useSession , signOut} from "next-auth/react";
import { navigation } from '@/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import MenuSvg from "@/assets/svg/MenuSvg";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { Avatar, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation"
import { LogOut, Menu, X } from "lucide-react";

  
function Navbar() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {data : session} = useSession();
    const pathName = usePathname();

    useGSAP(() => {
        gsap.from("#header", {
            y: -100,
            ease: "power3.out",
            duration: 1,
        });
    }, []);

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

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

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
            className={`fixed py-3 top-0 left-0 w-full z-50   transition-colors text-white ${
                openNavigation ? "bg-cyberBlack" : ""
            }  ${scrolled 
                ? 'bg-black  shadow-lg  bg-opacity-90' 
                : pathName === "/" ? 'bg-transparent pt-10 px-3' : ""
              } transition-all duration-1000 ease-in-out ${pathName !== "/" && "bg-cyberBlack"}`}
        >
            <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 lg:py-1">
                <Link href={"/"} className={`w-[12rem]  overflow-hidden xl:mr-8 flex items-center gap-2`}>
                    <Image
                        quality={100}
                        src={"/logo.png"}
                        className="object-cover"
                        alt={"Logo"}
                        width={70}
                        height={70}
                    />
                </Link>

                {/* Navigation */}
                <nav
                    className={`${
                        openNavigation ? 'flex' : 'hidden'
                    } fixed top-[4.75rem]  left-0 right-0 bottom-0 w-full bg-n-8 max-lg:h-[90vh] max-lg:bg-black max-lg:text-white   lg:static lg:flex lg:bg-transparent`}
                >
                    <div className="relative   z-2 max-lg:m-auto gap-x-5 flex flex-col items-center justify-center lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className={`block rounded-full   relative text-2xl uppercase tracking-wider text-n-1 transition-colors  max-lg:p-6  lg:px-4 py-2 lg:mr-0.25   ${
                                    item?.isMobile ? "lg:hidden" : ""
                                }`}
                                onClick={handleLinkClick}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
                
                {
                    session ? (
                        <div className="max-lg:hidden  flex items-center  gap-5 ">
                            <Link href={`/profile/${session.player?._id}`}>
                                <Avatar className="border border-white"> 
                                    {session?.player?.profile ? (
                                        <AvatarImage src={session.player?.profile as string}/>
                                    ) : (
                                        <AvatarImage src="https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=180"/>
                                    )}
                                </Avatar>
                            </Link>
                            <Button onClick={() => signOut({callbackUrl : "/"})}>
                                
                                <LogOut/> logout
                            </Button>
                        </div>
                    ) : (
                        <Link href={'/login'}
                            className="relative hidden shadow-none text-2xl bg-white tracking-widest font-bold lg:inline-flex hover:bg-white/50 items-center justify-center py-3 px-8 overflow-hidden text-n-8 rounded-full group  transition-all"
                            onClick={() => {}}
                        >
                            <span className="relative z-10">Join</span>
                            <span className="absolute inset-0 bg-n-1 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                        </Link>
                    )
                }

                <Button
                    className="ml-auto lg:hidden p-2"
                    onClick={toggleNavigation}
                >
                   {!openNavigation ? <Menu/> : <X/>}
                </Button>
            </div>
        </header>
    );
}

export default Navbar;