import React from 'react'
import GameCard from './GameCard'
import { games } from '@/lib/utils'
import { mainModule } from 'process'
import Image from 'next/image'
import { Button } from './ui/button'

function Games() {


  return (
    <section className='section_container  mt-14 '>
        <div className='text-4xl max-sm:text-2xl font-semibold '>
            ANNOUNCED GAMES
        </div>

        <ul className="card_grid mt-10">
           {games.map((game  , index) => (
                <GameCard game={game}/>
           ))} 
        </ul>

    </section>
  )
}

export default Games