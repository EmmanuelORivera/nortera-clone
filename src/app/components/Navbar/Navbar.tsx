import BurgerIcon from './BurgerIcon'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-[8.832px]">
      <Logo />
      <BurgerIcon />
    </nav>
  )
}

export default Navbar
