import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function Header() {
  return (
    <header className='w-full  h-16  flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-between gap-x-5">
            <Link href={"/dashboard"} className="flex items-center gap-x-2 h-full">
              <Image
                  className='invert'
                  src={"/logo.png"}
                  height={50}
                  width={50}
                  alt='DA'
              />
              <span className='font-bold uppercase text-xl'> <span className="text-3xl">D</span>ynammic <span className="text-3xl">A</span>reana</span>
            </Link>


            <div className="flex items-center gap-x-2  h-full">
            <Button className='bg-gray-300 hover:bg-gray-300 rounded-full text-black shadow-none text-xl'>Team switch</Button>

            <Button className='bg-transparent rounded-full shadow-none text-black hover:bg-transparent'>
                <Settings size={30}/>
            </Button>
            </div>
        </div>
    </header>
  )
}

export default Header