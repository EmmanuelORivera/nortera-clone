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
      className={`${bgColor} ${className} text-white text-center hover:rounded-[35px] overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className="px-14 pt-14">
        <h4 className="text-3xl font-semibold mb-4">{title}</h4>
        <p className="text-lg leading-5 mb-3">{description}</p>
        <GoToArrow className="mx-auto z-50 translate-y-5" />
      </div>

      {children}
    </div>
  )
}

export default BusinessWrapper
