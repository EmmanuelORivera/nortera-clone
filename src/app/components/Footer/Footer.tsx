import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-28 lg:flex lg:justify-between">
      <div className="flex text-sm lg:text-[1vw] gap-[2.13vw] mb-16 justify-between lg:flex-col">
        <div className="flex-1">
          <p className="uppercase lg:text-[1.1vw] font-semibold mb-2">Canada</p>
          <p>140, rue de l&apos;Équinoxe</p>
          <p>Brossard, QC J4Z 0R4</p>
        </div>
        <div className="flex-1">
          <p className="uppercase lg:text-[1.1vw] font-semibold mb-2">
            United States
          </p>
          <p>100 Corporate Woods, Suite 210</p>
          <p>Rochester, NY 14623</p>
        </div>
      </div>
      <div className="flex text-sm lg:text-[1vw] gap-[2.13vw] lg:gap-[6.13vw] justify-between">
        {/* left */}
        <div className="flex flex-col gap-[1.5vw] flex-1">
          <div className="grid gap-2">
            <p className="uppercase lg:text-[1.1vw] font-semibold ">Our food</p>
            <Link href="#" className="block">
              Our Custom Products
            </Link>
            <Link href="#" className="block">
              Our Brands
            </Link>
          </div>
          <div>
            <Link href="#" className="uppercase lg:text-[1.1vw] font-semibold ">
              Our Approach
            </Link>
          </div>
          <div>
            <Link href="#" className="uppercase lg:text-[1.1vw] font-semibold ">
              Contact Us
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col lg:flex-row lg:gap-[6.25vw] lg:mr-[min(88px,6.1111111111vw)] gap-[1.5vw] flex-1">
          <div>
            <div className="grid gap-2 mb-2">
              <p className="uppercase lg:text-[1.1vw] font-semibold ">Jobs</p>
              <Link href="#">Working at Nortera</Link>
              <Link href="#">Our Open Positions</Link>
            </div>

            <div className="grid gap-2">
              <p className=" uppercase lg:leading-8 lg:text-[1.1vw] font-semibold lg:w-[200px]">
                Who we are
              </p>
              <Link href="#">About Us</Link>
              <Link href="#">Our Commitments</Link>
            </div>
          </div>
          <div className="grid gap-4 lg:leading-8">
            <Link
              href="#"
              className="uppercase lg:text-[1.1vw] font-semibold  block lg:w-[200px]"
            >
              Press Relations
            </Link>

            <Link
              href="#"
              className="uppercase lg:text-[1.1vw] font-semibold  block"
            >
              FAQ
            </Link>

            <Link
              href="#"
              className="uppercase lg:text-[1.1vw] font-semibold  block"
            >
              Partners
            </Link>

            <Link
              href="#"
              className="uppercase lg:text-[1.1vw] font-semibold  block"
            >
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
