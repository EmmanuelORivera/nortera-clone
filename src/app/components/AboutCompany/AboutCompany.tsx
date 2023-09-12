import Link from 'next/link'

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
          <span className="relative bg-white w-[10.66vw] h-[10.66vw] rounded-full flex justify-center items-center overflow-hidden">
            <span
              data-testid="animated-span"
              className="bg-[#4c9e50] h-full w-full absolute z-0 rounded-full -translate-y-full group-hover:animate-hoverIn animate-hoverOut"
            ></span>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-full max-w-[40%] z-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7071 0.293015L24.4142 10.0001L14.7071 19.7072L13.2929 18.293L20.5858 11.0001H0V9.00012H20.5858L13.2929 1.70723L14.7071 0.293015Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="">Learn about our company</span>
        </Link>
      </div>
    </div>
  )
}

export default AboutCompany
