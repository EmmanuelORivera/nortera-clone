import Image from 'next/image'

const Mosaic = () => {
  return (
    <>
      <div className="relative h-[373.719px] mb-12">
        <div className="w-[71vw] absolute h-full overflow-hidden">
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
        <div className="w-[50vw] absolute right-0 bottom-0">
          <Image
            width={979}
            height={734}
            className="h-[261.95px] object-cover animate-clipPathUp"
            alt="mosaic-last-image"
            src="https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=120 120w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=360 360w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=720 720w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=1000 1000w"
          />
        </div>
      </div>
    </>
  )
}

export default Mosaic
