'use client'
import Link from 'next/link'
import { useEffect } from 'react'

const NavigationModal = ({
  isOpen,
  animation,
}: {
  isOpen: boolean
  animation: string
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])
  return (
    <div
      data-testid="navigation-modal"
      className={`px-[1.6667vw] md:px-[2.1333vw] h-full w-full bg-white fixed top-0 z-40 translate-x-[100%] ${animation}`}
    >
      <div className=" absolute top-[15vh] w-full grid justify-start gap-10 text-[calc(17.6px+1vw)] uppercase font-semibold pb-12 border-b border-black">
        <button className="text-left uppercase">our food +</button>
        <Link href="#">our approach</Link>
        <Link href="#">jobs</Link>
        <button className="text-left uppercase">who we are +</button>
        <Link href="#">contact us</Link>
      </div>
    </div>
  )
}

export default NavigationModal
