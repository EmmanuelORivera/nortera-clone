'use client'
import { useCallback, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver'

interface StatsDataProps {
  data: string
  description: string
}
const StatsData = ({ data, description }: StatsDataProps) => {
  const title = useRef(null)
  const component = useRef(null)
  const splitTextRef = useRef<SplitType | null>(null)
  const splitDescriptionRef = useRef<SplitType | null>(null)

  const startAnimation = useCallback((target: Element) => {
    if (!splitTextRef.current) {
      splitTextRef.current = new SplitType(`#title-${data}`)
    }
    if (!splitDescriptionRef.current) {
      splitDescriptionRef.current = new SplitType(`#description-${data}`)
    }

    let animationCount = 0
    const onAnimationComplete = () => {
      animationCount++
      if (
        animationCount === 3 &&
        splitTextRef.current &&
        splitDescriptionRef.current
      ) {
        splitTextRef.current.revert()
        splitDescriptionRef.current.revert()
      }
    }

    let ctx = gsap.context(() => {
      gsap.to(`#title-${data}`, {
        opacity: 1,
        onComplete: onAnimationComplete,
      })
      gsap.to(`#description-${data}`, {
        opacity: 1,
        duration: 0.5,
        onComplete: onAnimationComplete,
      })
      gsap.fromTo(
        '.char',
        { y: '100%', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: onAnimationComplete,
        }
      )
    }, component)
    return () => {
      if (splitTextRef.current && splitDescriptionRef.current) {
        splitTextRef.current.revert()
        splitDescriptionRef.current.revert()
      }
      ctx.revert()
    }
  }, [])

  useIntersectionObserver(`#title-${data}`, startAnimation)

  return (
    <div ref={component}>
      <p
        id={`title-${data}`}
        ref={title}
        className="text-4xl font-semibold overflow-hidden opacity-0"
      >
        {data}
      </p>
      <p
        id={`description-${data}`}
        className="text-sm uppercase font-semibold opacity-0"
      >
        {description}
      </p>
    </div>
  )
}

export default StatsData
