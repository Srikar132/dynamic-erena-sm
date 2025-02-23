import { auth, signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import React from 'react'

async function Page() {

    const session = await auth();

    if(session) {
        return redirect('/');
    }

  return (
    <div className='h-screen w-full max-md:grid-cols-1 grid grid-cols-2 '>
      {/* Image Section */}
      <div className="border max-md:hidden h-full w-full border-black">
        <Image
          src={"/side.jpg"}
          width={500}
          height={500}
          alt='Login Image'
          className='h-full w-full  object-cover'
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center p-8">
        <Image src="/logo.png" width={250} height={250} alt="Logo" className="mb-4 invert" />

        <h1 className="font-bold mb-2 uppercase text-5xl">Welcome Back!</h1>
        <p className="text-gray-600 text-center mb-6">Sign in to continue to your account</p>
        <form  action={async () => {
                "use server"
                await signIn("google")
                redirect("/");
            }}>
            <Button 
            type='submit'
            className="flex cursor-pointer items-center justify-center gap-2 bg-white text-black px-6 py-6 text-2xl border rounded-lg shadow-md hover:bg-gray-100 transition">
            <Image src="https://tse3.mm.bing.net/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&pid=Api&P=0&h=180" width={24} height={24} alt="Google Logo" className='bg-clip-content'/>
            <span>Continue with Google</span>
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Page
