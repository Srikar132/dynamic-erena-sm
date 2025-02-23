import LeaderBoard from "@/components/LeaderBoard"
import { leaderboardRanks } from "@/lib/utils";

function Page() {
  return (
    <div className="h-screen py-72 pt-96 overflow-y-auto w-full flex items-center justify-center">
      <div className="container  flex flex-col max-w-8xl">
          <h1 className='h2 uppercase tracking-wider font-bold'>
           LEADER BOARD</h1>
          
          <LeaderBoard items={leaderboardRanks}/>
      </div>
    </div>
  )
}




export default Page;