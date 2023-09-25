import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-14">
      <div className="flex text-sm gap-[2.13vw] mb-16 justify-between">
        <div className="flex-1">
          <p className="uppercase font-semibold ">Canada</p>
          <p>140, rue de l&apos;Équinoxe</p>
          <p>Brossard, QC J4Z 0R4</p>
        </div>
        <div className="flex-1">
          <p className="uppercase font-semibold ">United States</p>
          <p>100 Corporate Woods, Suite 210</p>
          <p>Rochester, NY 14623</p>
        </div>
      </div>
      <div className="flex text-sm gap-[2.13vw] justify-between">
        {/* left */}
        <div className="flex flex-col gap-[10.67vw] flex-1">
          <div className="grid gap-2">
            <p className="uppercase font-semibold ">Our food</p>
            <Link href="#" className="block">
              Our Custom Products
            </Link>
            <Link href="#" className="block">
              Our Brands
            </Link>
          </div>
          <div>
            <Link href="#" className="uppercase font-semibold ">
              Our Approach
            </Link>
          </div>
          <div>
            <Link href="#" className="uppercase font-semibold ">
              Contact Us
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-[10.67vw] flex-1">
          <div className="grid gap-2">
            <p className="uppercase font-semibold ">Jobs</p>
            <Link href="#">Working at Nortera</Link>
            <Link href="#">Our Open Positions</Link>
          </div>

          <div className="grid gap-2">
            <p className=" uppercase font-semibold ">Who we are</p>
            <Link href="#">About Us</Link>
            <Link href="#">Our Commitments</Link>
          </div>

          <Link href="#" className="uppercase font-semibold  block">
            Press Relations
          </Link>

          <Link href="#" className="uppercase font-semibold  block">
            FAQ
          </Link>

          <Link href="#" className="uppercase font-semibold  block">
            Partners
          </Link>

          <Link href="#" className="uppercase font-semibold  block">
            Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
