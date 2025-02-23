import React from 'react'
import GameCard from './GameCard'
import { games } from '@/lib/utils'

function Games() {

  return (
    <section className='section_container min-h-screen  mt-40 '>
        <div className='text-8xl    max-sm:text-2xl font-semibold '>
            ANNOUNCED GAMES
            <div className='text-5xl uppercase  text-gold   max-sm:text-xl font-semibold '>
                season 2025
            </div>
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