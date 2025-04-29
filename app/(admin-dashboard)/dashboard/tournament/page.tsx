import React from 'react'
import TournamentCard from "@/components/dashboard/Tournament1"
import {  tournamentDummyData } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import SearchInput from '@/components/dashboard/SearchInput';
import { Tournament } from '@/types/type';




async function Tournament({searchParams} : {
  searchParams: { [key : string] :string}
}) {

  const params = new URLSearchParams(Object.entries((await searchParams) || {})).toString();
  return (
    <div className={`py-5 px-3 md:px-5 lg:px-8`}>


      <div className='flex  items-center justify-between'>
        <h1 className={'h6  capitalize   tracking-widest leading-[10px]  '}>Tournaments</h1>

        <Button className='bg-primary_accent
        text-white rounded-none max-md:bg-transparent'>
            <Plus className='font-bold'/>
            <span className='hidden md:block font-bold uppercase'>create tournament</span>
        </Button>
      </div>



      <div className="mt-5 ">
          <div className="flex-center !justify-between">
            <div className='w-full'>
              <SearchInput currentParams={params} placeholder='Search Tournaments' />
            </div>
          </div>
      </div>


      <div className={'my-10 '}>
        <ul className={'mt-5 card_grid-sm !gap-12'}>
            {tournamentDummyData.map((tournament : Tournament , index : number) => (
                <TournamentCard key={index} tournament={tournament} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Tournament