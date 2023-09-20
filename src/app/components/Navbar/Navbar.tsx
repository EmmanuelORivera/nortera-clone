import BurgerIcon from './BurgerIcon'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-[1.6667vw] md:px-[2.1333vw]">
      <Logo />
      <BurgerIcon />
    </nav>
  )
}

export default Navbar
