import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'
import StatsData from './StatsData'
import WrapperIntersectionObserver from '@/app/components/WrapperIntersectionObserver/WrapperIntersectionObserver'
import { MOVE_DOWN_CLASS, MOVE_UP_CLASS } from '@/app/constants/classNames'
import StatsImage from './StatsImage'

const Stats = () => {
  return (
    <div className="mt-11">
      <h2 className="text-2xl font-semibold uppercase mb-16">
        Nortera in numbers
      </h2>

      <div className="rounded-t-[50%] w-[46.805vw] h-[49vw] ml-auto overflow-hidden">
        <StatsImage />
      </div>
      <WrapperIntersectionObserver
        targetSelector={MOVE_DOWN_CLASS}
        classNameToAdd={MOVE_UP_CLASS}
      >
        <p className="text-2xl leading-7 mt-9 mb-16">
          With facilities in Canada and the United States, Nortera processes and
          markets over 450,000 tons of frozen and canned vegetables per year
        </p>
      </WrapperIntersectionObserver>
      <div className="grid grid-cols-2 gap-x-5 gap-y-16">
        <StatsData data="800" description="agricultural partners" />
        <StatsData data="120500" description="acres of land cultivated" />
        <StatsData data="13" description="plants in north america" />
        <StatsData data="3500" description="permanent and seasonal employees" />
      </div>

      <Link
        href="#"
        className="group inline-flex mt-16 items-center gap-4 uppercase text-sm"
      >
        <GoToArrow />
        Learn about our approach
      </Link>
    </div>
  )
}

export default Stats
