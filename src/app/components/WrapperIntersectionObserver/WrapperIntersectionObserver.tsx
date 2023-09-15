'use client'
import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const WrapperIntersectionObserver = ({
  targetSelector,
  classNameToAdd,
  children,
}: {
  targetSelector: string
  classNameToAdd: string
  children: React.ReactNode
}) => {
  const callback = (target: Element) => {
    target.classList.add(classNameToAdd)
  }

  useIntersectionObserver(targetSelector, callback)
  return <div className={targetSelector}>{children}</div>
}

export default WrapperIntersectionObserver
