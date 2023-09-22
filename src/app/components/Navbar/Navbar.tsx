'use client'
import { useState } from 'react'
import BurgerIcon from './BurgerIcon'
import Logo from './Logo'
import NavigationModal from './NavigationModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center relative bg-transparent justify-between py-6 px-[1.6667vw] md:px-[2.1333vw] z-50">
        <Logo />
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <NavigationModal isOpen={isOpen} />
    </>
  )
}

export default Navbar
