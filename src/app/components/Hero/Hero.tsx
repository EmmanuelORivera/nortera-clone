import Nortera from '@/app/svgComponents/Nortera'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="rounded-full w-[71vw] h-[71vw] self-end overflow-hidden animate-showsUp md:order-2 md:max-h-[21vw] md:max-w-[36vw] ">
          <Image
            className="z-10 h-full w-full animate-zoomImage scale-[1.4] object-cover md:order-1"
            alt="hero-image"
            width={5472}
            height={3648}
            src="https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
https://www.datocms-assets.com/85733/1681222357-2022-08-03_09102545_photo_by_jimmy_hamelin-3.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
          />
        </div>
        <p className="uppercase text-2xl md:text-mediumvw xl:text-bigvw md:leading-bigvw font-semibold animate-showsDownTitle md:self-end ">
          The North American leader in ready-to-cook vegetables
        </p>
      </div>
      <Nortera className=" my-20" id="1" />
    </div>
  )
}

export default Hero
