import React from 'react'
import GoToArrow from '../GoToArrow/GoToArrow'
import Image from 'next/image'

interface BusinessWrapperProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
  type?: 'primary' | 'secondary'
}

const BusinessWrapper = ({
  title,
  description,
  className,
  children,
  type = 'primary',
}: BusinessWrapperProps) => {
  const bgColor = type === 'primary' ? 'bg-custom-green' : 'bg-peachy-baige'

  return (
    <div
      data-testid="business-wrapper"
      className={`${bgColor} ${className} h-full md:relative text-white text-center hover:rounded-[35px] overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className="px-14 pt-14 md:w-[75%] md:top-[0%] xl:top-[20%] md:left-[50%] md:-translate-x-[50%] md:absolute">
        <h4 className="uppercase text-3xl md:text-[calc(16px+2vw)] md:leading-[3vw] font-semibold mb-4">
          {title}
        </h4>
        <p className="text-lg md:text-[calc(6px+1vw)] md:leading-[2vw]  mb-3">
          {description}
        </p>
      </div>
      <GoToArrow
        type="big"
        className="mx-auto z-50 translate-y-5 md:absolute md:bottom-6 md:left-[50%] md:-translate-x-[50%]"
      />
      {children}
    </div>
  )
}

export default BusinessWrapper
