import StatCard from "@/components/dashboard/StatCard";
import { tournamentStats } from "@/lib/utils";


function page() {
  return (
      <main className='section_padding'>

        <div className="mt-5">
          <ul className='card_grid'>
            {tournamentStats.map((stat , index) => (
              <li>
                  <StatCard
                    title={stat.title}
                    description={stat.description}
                    value={stat.value}
                    trend={stat.trend}
                    Icon={stat.Icon}
                  />
              </li>
            ))}
          </ul>
        </div>


      </main>
  )
}

export default page;

