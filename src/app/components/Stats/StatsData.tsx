'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

interface StatsDataProps {
  data: string
  description: string
}
const StatsData = ({ data, description }: StatsDataProps) => {
  const title = useRef(null)
  const component = useRef(null)
  useLayoutEffect(() => {
    const text = new SplitType(`#title-${data}`)
    const description = new SplitType(`#description-${data}`)

    let animationCount = 0
    const onAnimationComplete = () => {
      animationCount++
      if (animationCount === 3) {
        text.revert()
        description.revert()
      }
    }
    let ctx = gsap.context(() => {
      gsap.to(`#title-${data}`, { opacity: 1, onComplete: onAnimationComplete })
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
      text.revert()
      description.revert()
      ctx.revert()
    }
  }, [])

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
