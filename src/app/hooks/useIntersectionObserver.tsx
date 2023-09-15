import { useEffect, useRef } from 'react'

function useIntersectionObserver(
  targetSelector: string,
  callback: (target: Element) => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target)
        }
      })
    })

    const elements = document.querySelectorAll(`.${targetSelector}`)
    elements.forEach((el) => observerRef.current!.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [targetSelector, callback])
}

export default useIntersectionObserver
