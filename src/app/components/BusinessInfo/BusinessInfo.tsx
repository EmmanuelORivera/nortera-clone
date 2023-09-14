import Image from 'next/image'
import BusinessWrapper from './BusinessWrapper'

const BusinessInfo = () => {
  return (
    <div>
      <BusinessWrapper
        title="Our custom products"
        description="With over 260 products and two processing technologies, Nortera helps
        its customers stand out."
      >
        <Image
          className="w-full h-[50vw] object-cover"
          alt="products"
          width={1200}
          height={800}
          src="https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
      https://www.datocms-assets.com/85733/1681326677-2022-08-03_09153615_photo_by_jimmy_hamelin-1-min.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
        />
      </BusinessWrapper>
    </div>
  )
}

export default BusinessInfo
