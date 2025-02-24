import StatCard from '@/components/dashboard/StatCard'
import { Button } from '@/components/ui/button'
import { Calendar, CheckCircle, DollarSign, FolderOpen, Gamepad, Medal, Plus, Settings, Tv2, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import LeaderBoard from "@/components/LeaderBoard"
import { leaderboardRanks, tournamentDummyData } from '@/lib/utils'
import Link from 'next/link'
import { Tournament } from '@/sanity/types'
import { Card } from '@/components/ui/card'
import TournamentCard from '@/components/dashboard/Tournament1'

function page() {
  return (
      <main className='border h-full py-10 '>

        <div className="stat_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <StatCard
              title="Total Users"
              value={24685}
              Icon={<Users className="h-6 w-6" />}
              trend={{ value: 12, isPositive: true }}
              description="Active users this month"
            />
            
            <StatCard
              title="Total Teams"
              value={64}
              Icon={<Users className="h-6 w-6" />}
              trend={{ value: 15, isPositive: true }}
              description="Registered teams across all tournaments"
            />
            
            <StatCard
              title="Matches Today"
              value={12}
              Icon={<Calendar className="h-6 w-6" />}
              description="Scheduled matches for today"
            />
            
            <StatCard
               title="Champions"
               value={16}
               Icon={<Medal className="h-6 w-6" />}
               description="Tournament winners this season"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 p-4 gap-5">

          <div className=" col-span-2 gap-y-5  flex flex-col max-w-8xl">
            <span className='font-bold uppercase text-xl'> <span className="text-3xl">L</span>eaderboard</span>
              
              <LeaderBoard items={leaderboardRanks}/>
          </div>

          <div className=" col-span-2 gap-y-5  flex flex-col max-w-8xl">

            <div className="w-full flex items-center justify-between">
              <span className='font-bold uppercase text-xl'> <span className="text-3xl">T</span>ournaments</span>

              <Link href={"/dashboard/tournament"}>
                  <Plus size={30}/>
              </Link>
            </div>
              
            {tournamentDummyData.map((tournament : Tournament , i : number) => (
              <TournamentCard tournament={tournament}/>
            ))}
              
          </div>

        </div>
        

      </main>
  )
}

export default page;

