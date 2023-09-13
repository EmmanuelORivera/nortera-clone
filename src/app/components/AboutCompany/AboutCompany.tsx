import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'

const AboutCompany = () => {
  return (
    <div className="pb-6 border-b border-black">
      <p className="text-[2rem] mb-24">
        To contribute to the well-being of society through access to the
        richness of vegetables.
      </p>

      <div>
        <Link
          href="#"
          className="group inline-flex items-center gap-4 uppercase text-sm"
        >
          <GoToArrow />
          <span className="">Learn about our company</span>
        </Link>
      </div>
    </div>
  )
}

export default AboutCompany
