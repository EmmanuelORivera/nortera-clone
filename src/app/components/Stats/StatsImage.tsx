import { FINAL_ZOOM } from '@/app/constants/classNames'
import Image from 'next/image'

const StatsImage = () => {
  return (
    <>
      <Image
        className={`w-full h-full object-cover ${FINAL_ZOOM}`}
        width={800}
        height={800}
        alt="betteraves"
        src="https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
      />
    </>
  )
}

export default StatsImage
