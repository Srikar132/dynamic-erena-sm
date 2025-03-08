import { tournamentDummyData } from "@/constants";
import { GrGamepad } from "react-icons/gr";

async function page({ params } : {params : {id : string}}) {
    const id = (await params)?.id;

    const tournament = tournamentDummyData[0];

  return (
    <section className='section_padding overflow-hidden flex flex-col relative'>
      <div className="min-h-40 ">
        <img src="" alt="" />
      </div>

      <div className="w-full h-screen  rounded-t-xl bg-primary_accent/50 lg:mx-3 relative p-2 md:p-5 lg:p-10">

       
        <div className="absolute  -top-[5%] -right-[5%] -translate-x-1/2 flex items-center justify-center 
                        text-5xl  border-primary_accent 
                        bg-transparent rotate-45 skew-x-3  w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
          <GrGamepad className="lg:size-16 text-gray-200/50"/>
        </div>







        </div>

    </section>
  )
}

export default page;