import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'
import StatsData from './StatsData'
import { MOVE_DOWN_CLASS } from '@/app/constants/classNames'
import StatsImage from './StatsImage'

const Stats = () => {
  return (
    <div className="mt-11 mb-16">
      <h2 className="text-2xl md:text-mediumvw lg:text-bigvw md:leading-bigvw md:max-w-[23.54025vw] font-semibold uppercase mb-16">
        Nortera in numbers
      </h2>

      <div className="md:grid md:grid-cols-[23.54025vw_35.726875vw_1fr] md:gap-[5.26vw]">
        <div className="rounded-t-[50%] w-[46.805vw] h-[49vw] md:h-[24.63vw] md:w-[23.54vw] ml-auto md:mt-auto overflow-hidden">
          <StatsImage />
        </div>

        <div className="flex flex-col justify-between">
          <p
            className={`${MOVE_DOWN_CLASS} text-2xl leading-7 mt-9 mb-16 md:text-mediumvw lg:text-bigvw md:leading-[4vw] lg:leading-bigvw`}
          >
            With facilities in Canada and the United States, Nortera processes
            and markets over 450,000 tons of frozen and canned vegetables per
            year
          </p>
          <Link
            href="#"
            className="group mt-16 items-center gap-4 uppercase text-sm hidden md:inline-flex"
          >
            <GoToArrow />
            Learn about our approach
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-16 md:grid-rows-3 md:grid-cols-1">
          <StatsData data="800" description="agricultural partners" />
          <StatsData data="120500" description="acres of land cultivated" />
          <StatsData data="13" description="plants in north america" />
          <StatsData
            data="3500"
            description="permanent and seasonal employees"
          />
        </div>

        <Link
          href="#"
          className="group inline-flex mt-16 items-center gap-4 uppercase text-sm md:hidden"
        >
          <GoToArrow />
          Learn about our approach
        </Link>
      </div>
    </div>
  )
}

export default Stats
