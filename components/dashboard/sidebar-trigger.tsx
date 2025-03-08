"use client";

import {Menu} from "lucide-react";
import {useStore} from "@/store";

const SidebarTrigger = () => {
    const {setOpenSidebar} = useStore();

    return (
        <button className={`md:hidden`}>
            <Menu onClick={() => setOpenSidebar(true)}/>
        </button>
    )
}

export default SidebarTrigger;
