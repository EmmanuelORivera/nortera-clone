'use client'
import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'
import { MOVE_DOWN_CLASS } from '@/app/constants/classNames'

const AboutCompany = () => {
  return (
    <div className="pb-6 border-b border-black">
      <p
        className={`${MOVE_DOWN_CLASS} text-3xl md:text-xlvw md:leading-smallvw mb-24`}
      >
        To contribute to the well-being of society through access to the
        richness of vegetables.
      </p>

      <div>
        <Link
          href="#"
          className="group inline-flex items-center gap-4 uppercase text-sm"
        >
          <GoToArrow />
          <span className="md:text-[calc(12.4px + .25vw)] lg:text-[1.11vw]">
            Learn about our company
          </span>
        </Link>
      </div>
    </div>
  )
}

export default AboutCompany
