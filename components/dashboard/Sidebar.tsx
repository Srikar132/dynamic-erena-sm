"use client";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import {Home, Trophy, Users, X} from "lucide-react";
import {useRef} from "react";
import {useStore} from "@/store";
import {IoArrowBack} from "react-icons/io5";
import {GrAnnounce} from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
function Sidebar() {
    const {openSidebar  , setOpenSidebar} = useStore();
    const sidebarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(sidebarRef.current, {
            duration: .5,
            ease: "easeOut",
            left: openSidebar ? "0rem" : "-18rem"
        });
    }, [openSidebar]);



    return (
        <div ref={sidebarRef} className={`w-[18rem] border-r border-px border-r-double border-primary_accent bg-primary_accent md:bg-primary_bg  z-10 flex flex-col gap-5 p-3 fixed top-0  h-screen overflow-scroll   md:static md:z-0 `}
        style={{left : "-18rem"}}>
            <div className={`w-full p-1 flex items-center justify-between`}>
                <Image alt={"logo"} width={50} height={50} className={'w-10 h-10 object-contain bg-blend-multiply '} src={"/logo.png"}/>
                <button onClick={() => setOpenSidebar(!openSidebar)} className={'md:hidden w-10 h-10 hover:bg-primary_green/50 hover:bg-opacity-60 transition-colors duration-500 border rounded-lg border-border_green flex justify-center items-center'}>
                    <IoArrowBack className="h-5 w-5 text-primary_green cursor-pointer " />
                </button>
            </div>

            <div className={'flex-1 overflow-scroll flex flex-col p-1 '}>
                <Group title={'Dashboard'} items={[
                    {name : "Home" , Icon : Home , url : "/dashboard"},
                    {name : "Tournaments" , Icon : Trophy , url : "/dashboard/tournament"},
                    {name : "Teams" , Icon : Users , url : "/dashboard/teams"},
                    {name : "Announcements" , Icon : GrAnnounce , url : "/dashboard/announcements"},
                ]}/>
            </div>
        </div>
    )
}

export default Sidebar;


interface Props {
    title: string;
    items: Array<{name: string; Icon: any; url: string}>;
}

const Group = ({title , items} : Props) => (
    <div className={`w-full flex flex-col `}>
        <h3 className={'text-xs font-semibold uppercase text-white-100/50 '}>{title}</h3>
        <ul className={'mt-2 p-2 space-y-2'}>
            {items.map(item => (
                <Link key={item.name} href={item.url}>
                    <li key={item.name} className={'text-xs uppercase p-2 py-2.5   rounded-lg cursor-pointer text-white-100/70 tracking-wider transtion-all hover:text-primary_green duration-500 hover:bg-primary_accent flex gap-x-2 items-center'}>
                        <item.Icon className="h-4 w-4"/>
                        {item.name}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
)
