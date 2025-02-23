import StatCard from '@/components/dashboard/StatCard'
import { Button } from '@/components/ui/button'
import { Calendar, CheckCircle, DollarSign, FolderOpen, Gamepad, Medal, Settings, Tv2, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col p-2 sm:p-5 md:p-10 lg:p-14">
      <nav className='w-full  h-16  flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-between gap-x-5">
            <div className="flex items-center gap-x-2 h-full">
              <Image
                className='invert'
                src={"/logo.png"}
                height={50}
                width={50}
                alt='DA'
              />

              <span className='font-bold uppercase text-xl'> <span className="text-3xl">D</span>ynammic <span className="text-3xl">A</span>reana</span>
            </div>


            <div className="flex items-center gap-x-2  h-full">
              <Button className='bg-gray-300 hover:bg-gray-200 rounded-full text-black shadow-none text-xl'>Team switch</Button>

              <Button className='bg-white-100 rounded-full shadow-none text-black hover:bg-white'>
                <Settings size={30}/>
              </Button>

              
            </div>
        </div>
      </nav>

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

        

      </main>
    </div>
  )
}

export default page;

