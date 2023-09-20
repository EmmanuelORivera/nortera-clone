import { MOVE_DOWN_CLASS } from '@/app/constants/classNames'
import Image from 'next/image'

const Mosaic = () => {
  return (
    <div className="mb-24 md:flex">
      <div className="relative h-[373.719px] mb-12 md:mb-0 md:flex md:h-full">
        <div className="w-[71vw] absolute h-full overflow-hidden md:relative md:w-[41.5vw] md:h-[50.8vw]">
          <Image
            width={979}
            height={734}
            className="h-full object-cover animate-clipPathUp"
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            }}
            alt="mosaic-main-image"
            src="https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=120 120w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=360 360w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=720 720w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=1000 1000w"
          />
        </div>
        <div className="w-[50vw] absolute right-0 bottom-0 md:relative md:w-[25vw] md:h-[34vw]  md:self-end md:-translate-x-[7vw]">
          <Image
            width={979}
            height={734}
            className="h-[261.95px] object-cover animate-clipPathUp md:h-full"
            alt="mosaic-last-image"
            src="https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=120 120w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=360 360w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=720 720w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=1000 1000w"
          />
        </div>
      </div>
      <p
        className={`text-lg md:text-mediumvw md:leading-7 md:h-[34vw] lg:leading-9 md:w-[38vw] md:mx-auto self-end ${MOVE_DOWN_CLASS}`}
      >
        At Nortera, we specialize in the processing and marketing of canned and
        frozen vegetables. We do everything possible to offer healthy and
        sustainable food.
      </p>
    </div>
  )
}

export default Mosaic
