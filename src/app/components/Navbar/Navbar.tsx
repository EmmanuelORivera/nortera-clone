'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import BurgerIcon from './BurgerIcon'
import Logo from './Logo'
import NavigationModal from './NavigationModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false)
  const [navigationModalAnimation, setNavigationModalAnimation] = useState('')
  const navbarRef = useRef<HTMLElement | null>(null)
  const backgroundColor = isBackgroundWhite ? 'bg-white' : 'bg-transparent'

  useLayoutEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (navbarRef.current)
        if (currentScroll <= 0) {
          navbarRef.current.classList.remove('scrollUp')
          setIsBackgroundWhite(false)
        } else if (lastScroll === 0) {
          navbarRef.current.classList.remove('scrollUp')
          setIsBackgroundWhite(true)
        } else if (currentScroll > lastScroll && !isOpen) {
          navbarRef.current.classList.add('scrollUp')
          setIsBackgroundWhite(true)
        } else if (currentScroll < lastScroll) {
          navbarRef.current.classList.remove('scrollUp')
          setIsBackgroundWhite(true)
        }
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <>
      <header
        data-testid="header"
        ref={navbarRef}
        className={`fixed top-0 w-full z-50 transition-all`}
      >
        <nav
          className={`${backgroundColor} transition-all flex items-center relative justify-between py-6 px-[1.6667vw] md:px-[2.1333vw] z-50`}
        >
          <Logo />
          <BurgerIcon
            isOpen={isOpen}
            isBackgroundWhite={isBackgroundWhite}
            setIsOpen={setIsOpen}
            setNavigationModalAnimation={setNavigationModalAnimation}
          />
        </nav>
        <NavigationModal isOpen={isOpen} animation={navigationModalAnimation} />
      </header>
      <div data-testid="spacer" className="mb-20"></div>
    </>
  )
}

export default Navbar
