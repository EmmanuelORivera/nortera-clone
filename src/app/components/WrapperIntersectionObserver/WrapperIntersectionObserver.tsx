'use client'
import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const WrapperIntersectionObserver = ({
  targetSelector,
  classNameToAdd,
  children,
  className,
}: {
  targetSelector: string
  classNameToAdd: string
  children: React.ReactNode
  className?: string
}) => {
  const callback = (target: Element) => {
    target.classList.add(classNameToAdd)
  }

  useIntersectionObserver(targetSelector, callback)
  return <div className={`${targetSelector} ${className}`}>{children}</div>
}

export default WrapperIntersectionObserver
