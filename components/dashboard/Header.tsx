import { Button } from '@/components/ui/button'
import {Bell, Search , User } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarTrigger from './sidebar-trigger'

function Header() {
  return (
      <header className={`py-5 px-3 md:px-5 lg:px-8 flex items-center justify-between gap-5 `}>
          <div className={`flex items-center gap-x-2`}>
              <div className={`bg-primary_green rounded-full flex items-center justify-center`}>
                  <Image alt={"logo"} width={30} height={30}
                         className={'invert rounded-full object-contain  '}
                         src={"/logo.png"}/>
              </div>

              <div className={` max-md:hidden flex flex-col `}>
                  <h5 className={`h5 leading-[18px] tracking-wider uppercase font-bold`}>DYNAMIC</h5>
                  <h6 className={`text-xs font-thin uppercase tracking-[21px]`}>ARENA</h6>
              </div>

          </div>

          <div className={`flex items-center gap-x-2`}>
              <Link href={'/dashboard/teams'}>
                  <Button className={'bg-transparent   border-primary_green border  max-md:hidden text-primary_green'}>
                      <span className={`max-md:hidden`} >Teams</span>
                  </Button>
              </Link>

              <search className="flex items-center gap-x-2 justify-center
                       bg-primary_accent/50 hover:bg-primary_accent
                       text-white/50 hover:text-white transition-all duration-300
                       rounded-full py-2 max-md:px-2 px-6 shadow-md hover:shadow-lg
                       cursor-pointer">
                  <Search size={16} className="transition-transform duration-300 group-hover:scale-110"/>
                  <span
                      className="leading-relaxedd max-md:hidden tracking-wide text-md font-light">Search from here</span>
              </search>

              <search className="flex items-center gap-x-2 justify-center
                       bg-primary_accent/50 hover:bg-primary_accent
                       text-white/50 hover:text-white transition-all duration-300
                       rounded-full p-2 shadow-md hover:shadow-lg
                       cursor-pointer">
                  <Bell size={16} className="transition-transform duration-300 group-hover:scale-110"/>
              </search>

              <SidebarTrigger/>

          </div>


      </header>
  )
}

export default Header