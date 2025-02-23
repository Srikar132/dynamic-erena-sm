import { auth } from '@/auth'
import TeamClient from '@/components/create-team-client';
import { client } from '@/sanity/lib/client';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const session = await auth();

    if(!session?.user) redirect("/login");

    const players = await client.fetch(`
        *[_type == "player" && !isAdmin && !defined(currentTeam)] {
            _id,
            name,
            email,
            profile,
        }
    `);

  return (
    <div className='mt-[5.75rem] min-h-screen z-50 bg-black/30 flex items-center justify-center'>
        <div className="bg-white rounded-lg  shadow-lg flex flex-col gap-5 text-black w-full h-full  max-w-3xl p-10 py-12 lg:max-h-[90%]">
            <div className="text-center mb-8">
            <h1 className="h1  font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                CREATE YOUR TEAM
            </h1>
            <p className="text-black-200 mt-2">Assemble your squad and dominate the arena</p>
            </div>

            {/* CLIENT FORM */}
            <TeamClient availablePlayers={players}/>
        </div>
    </div>
  )
}

export default page