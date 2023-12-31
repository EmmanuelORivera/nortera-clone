import { MOVE_DOWN_CLASS } from '@/app/constants/classNames'

const ImageSlider = () => {
  const renderDivs = (): JSX.Element[] => {
    const divs: JSX.Element[] = []

    for (let i = 0; i < 10; i++) {
      divs.push(
        <div
          key={i}
          className="flex justify-center items-center"
          data-testid="slide"
        >
          <p className="uppercase text-4xl md:text-[calc(3.2px+7vw)] font-semibold">
            Our Food
          </p>
          <svg
            viewBox="0 0 85 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-8  md:w-[5vw]  mx-6 "
          >
            <path
              d="M71.257 27.997a23.176 23.176 0 0 0 6.774-16.539l-.022-3.937-3.938-.022a23.184 23.184 0 0 0-16.538 6.773L13.848 57.957a23.176 23.176 0 0 0-6.773 16.538l.022 3.938 3.937.022a23.176 23.176 0 0 0 16.539-6.773l43.684-43.685Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )
    }

    return divs
  }
  return (
    <div className={`${MOVE_DOWN_CLASS} overflow-hidden pt-4 mb-24`}>
      <div className="inline-flex">
        <div
          className="flex whitespace-nowrap animate-slide md:mt-[2vw]"
          data-testid="slider-animated"
        >
          {renderDivs()}
        </div>
        <div
          className="flex whitespace-nowrap animate-slide md:mt-[2vw]"
          data-testid="slider-animated"
        >
          {renderDivs()}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
