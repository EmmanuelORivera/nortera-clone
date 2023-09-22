'use client'
import { useState } from 'react'
import BurgerIcon from './BurgerIcon'
import Logo from './Logo'
import NavigationModal from './NavigationModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navigationModalAnimation, setNavigationModalAnimation] = useState('')
  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <nav className="flex items-center relative bg-transparent justify-between py-6 px-[1.6667vw] md:px-[2.1333vw] z-50">
          <Logo />
          <BurgerIcon
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setNavigationModalAnimation={setNavigationModalAnimation}
          />
        </nav>
        <NavigationModal isOpen={isOpen} animation={navigationModalAnimation} />
      </header>
      <div className="mb-20"></div>
    </>
  )
}

export default Navbar
