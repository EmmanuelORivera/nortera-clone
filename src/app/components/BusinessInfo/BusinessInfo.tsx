import Image from 'next/image'
import BusinessWrapper from './BusinessWrapper'

const BusinessInfo = () => {
  return (
    <div className="pb-16 border-b border-black grid md:grid-cols-2 md:gap-4">
      <BusinessWrapper
        title="Our custom products"
        description="With over 260 products and two processing technologies, Nortera helps
        its customers stand out."
      >
        <div className="h-[40vw]"></div>
      </BusinessWrapper>

      <BusinessWrapper
        title="Our Brands"
        description="Our brands offer consumers favorite vegetables, legumes, and fruits. "
        type="secondary"
      >
        <Image
          className="w-full h-[40vw] object-cover"
          style={{ objectPosition: '0 55%' }}
          alt="brands"
          width={1200}
          height={800}
          src="https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
          https://www.datocms-assets.com/85733/1681248220-nos-marques.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
        />
      </BusinessWrapper>
    </div>
  )
}

export default BusinessInfo
