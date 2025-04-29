import ActiveTabs, { Tab } from "@/components/ActiveTabs";
import { Status, statusColors, tournamentDummyData } from "@/lib/utils";
import { Tournament } from "@/types/type";
import { IndianRupee, Trophy, TrophyIcon } from "lucide-react";
import { GrGamepad, GrMoney, GrTrophy, GrUserWorker } from "react-icons/gr";
import { IoTrophy } from "react-icons/io5";
import ReactMarkDown from "react-markdown"



async function page({ params } : {params : {id : string}}) {
    const id = (await params)?.id;

    const tournament : Tournament = tournamentDummyData[0];


  return (
    <section className='section_padding overflow-hidden flex flex-col relative'>

      <div className="w-full mb-10 flex-wrap rounded-lg flex flex-col md:flex-row gap-5   overflow-hidden">
        <div className="flex items-center justify-center p-5 sm:p-7 md:p-10 lg:p-12  rounded-lg border border-primary_accent overflow-hidden md:bg-blue-400 bg-opacity-80">
         <span className="font-bold text-7xl lg:text-2xl line-clamp-1 whitespace-nowrap font-teko-font   uppercase tracking-widest"> {tournament.game}</span>
        </div>

        <div className="relative space-y-5 flex-1 flex flex-col font-bold line-clamp-2">
          <div className="flex items-center flex-wrap justify-between">
            <h1 className="h2">{tournament.title}</h1>
            <span className={` ${statusColors[tournament.status as Status]} text-xs w-fit  px-3 py-1 rounded-full backdrop-blur-sm`}>
              {tournament.status.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center p-1 gap-x-3">
            <GrTrophy size={20} className=" text-yellow-300"/>
            <span className="font-semibold font-mono  flex-center items-center">
              <IndianRupee size={20}/> {
              tournament.prizePool
            } /-</span>
          </div>

        </div>
      </div>

      <div className="w-full    relative p-2 md:p-5  lg:p-6">
        <ActiveTabs>
          <Tab label="overview">
            <div className="flex  flex-col md:flex-row    gap-5 w-full">
                <div className="flex-1">
                  <h1 className="h5 tracking-wide font-semibold mb-4">About Tournament</h1>
                  <div className="w-full prose prose-lg prose-headings:text-white prose-strong:text-white-100 text-white">
                    <ReactMarkDown >{tournament.pitch}</ReactMarkDown>
                  </div>
                </div>
                <div className="basis-1/3 flex flex-col space-y-2 h-fit">
                  <div className="rounded-lg p-4  bg-primary_accent/80 ">
                    <h1 className="h6">Tournament Info</h1>
                    <div className="flex mt-2 space-y-1 flex-col">
                      <DetailsCard
                        Icon={GrUserWorker}
                        title="Max Teams"
                        content={tournament.maxTeams}
                      />
                      <DetailsCard
                        Icon={GrGamepad}
                        title="Format"
                        content={tournament.matchFormat}
                      />
                      <DetailsCard
                        Icon={GrMoney}
                        title="Entry Fee"
                        content={tournament.entryFee}
                      />
                    </div>
                  </div>
                  <div className="rounded-lg   bg-primary_accent/80 p-4">
                    <h1 className="h6">Prize Pool Distribution</h1>
                    <div className="flex mt-2 space-y-1 flex-col">
                      <DetailsCard
                        Icon={GrTrophy}
                        title="1st Prize"
                        content={tournament.prizes["1st"]}
                      />
                      <DetailsCard
                        Icon={Trophy}
                        title="2nd Prize"
                        content={tournament.prizes["2nd"]}
                      />
                      <DetailsCard
                        Icon={IoTrophy}
                        title="3rd Prize"
                        content={tournament.prizes["3rd"]}
                      />
                    </div>
                  </div>
                </div>
            </div>
            <div className="w-full flex">
              <div className="border w-full"></div>
            </div>
          </Tab>

          <Tab label="rules">
            <div>
              <h1 className="h5 tracking-wide font-semibold mb-4">Rules</h1>
              <div className="prose prose-lg prose-headings:text-white prose-strong:text-white-100 text-white">
                <ReactMarkDown>{tournament.rules}</ReactMarkDown>
              </div>
            </div>
          </Tab>

          <Tab label="participants">
            <div className="w-full"></div>
          </Tab>
          <Tab label="schedule">
            <p>tab2</p>
          </Tab>
        </ActiveTabs>





        </div>

    </section>
  )
}

const DetailsCard = ({
  Icon,
  title ,
  content
} : {
  Icon : any;
  title : string;
  content : number | string;
}) => (
    <div className="w-full flex items-center gap-x-3 lg:p-1  p-3 hover:bg-primary_accent text-white rounded-lg shadow-md">
    <Icon size={24} className="text-blue-400" />
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-300">{title}</span>
      <span className="text-lg font-semibold text-white">{content}</span>
    </div>
  </div>
);

export default page;