import Image from 'next/image'

const Mosaic = () => {
  return (
    <div>
      <Image
        width={979}
        height={734}
        alt="mosaic-main-image"
        src="https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=120 120w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=360 360w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=720 720w,
https://www.datocms-assets.com/85733/1675870049-image01.png?ixlib=js-3.8.0&auto=format&w=1000 1000w"
      />
      <Image
        width={979}
        height={734}
        alt="mosaic-last-image"
        src="https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=120 120w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=360 360w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=720 720w,
        https://www.datocms-assets.com/85733/1681315921-2c4a0591-min.jpg?ixlib=js-3.8.0&auto=format&w=1000 1000w"
      />
    </div>
  )
}

export default Mosaic
