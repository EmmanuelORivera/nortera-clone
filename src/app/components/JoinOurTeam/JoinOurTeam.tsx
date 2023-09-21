'use client'
import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'
import Image from 'next/image'
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver'

const JoinOurTeam = () => {
  useIntersectionObserver('#working-people', (target) => {
    target.classList.add('animate-clipPathUp')
  })
  return (
    <div className="bg-custom-green text-white px-[1.6667vw] md:px-[2.1333vw] md:grid md:grid-cols-[41.8201875vw_47.9135vw] lg:md:grid-cols-[41.8201875vw_41.8201875vw] md:justify-end md:gap-[6.0933125vw] pt-6 pb-16 border-b-2 border-white">
      <div className="h-[121vw] md:h-full mb-12 order-2">
        <Image
          id="working-people"
          className="w-full h-full md:h-[80%] object-cover md:sticky md:top-8"
          height={800}
          width={800}
          alt="workin people"
          src="https://www.datocms-assets.com/85733/1681248724-2022-08-03_09133482_photo_by_jimmy_hamelin-4-min.jpg?ixlib=js-3.8.0&auto=format&w=120 120w,
https://www.datocms-assets.com/85733/1681248724-2022-08-03_09133482_photo_by_jimmy_hamelin-4-min.jpg?ixlib=js-3.8.0&auto=format&w=360 360w,
https://www.datocms-assets.com/85733/1681248724-2022-08-03_09133482_photo_by_jimmy_hamelin-4-min.jpg?ixlib=js-3.8.0&auto=format&w=720 720w,
https://www.datocms-assets.com/85733/1681248724-2022-08-03_09133482_photo_by_jimmy_hamelin-4-min.jpg?ixlib=js-3.8.0&auto=format&w=1000 1000w"
        />
      </div>
      <div className="order-1 md:mt-[6.667vw]">
        <h2 className="uppercase text-[40.48px] md:text-[calc(13.6px+3.5vw)] leading-9 font-semibold mb-4">
          Join our team
        </h2>
        <p className="leading-5 text-base mb-14 md:text-smallvw lg:text-mediumvw md:leading-bigvw">
          Come grow with us. Learn more about our operations, production, and
          corporate job openings!
        </p>

        <Link
          href="#"
          className="group inline-flex items-center gap-4 uppercase text-sm mb-6 md:text-smallvw lg:text-[calc(1.6px+1.1vw)] md:leading-bigvw"
        >
          <GoToArrow />
          <span>Work at nortera</span>
        </Link>

        <Image
          className="w-[46vw] h-[64vw] md:w-[17.4vw] md:h-[24.4vw] rounded-[100%_/_75%] object-cover ml-auto md:ml-0"
          height={800}
          width={800}
          alt="team member"
          src="https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
https://www.datocms-assets.com/85733/1679682275-emplois-departements.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
        />
      </div>
    </div>
  )
}

export default JoinOurTeam
