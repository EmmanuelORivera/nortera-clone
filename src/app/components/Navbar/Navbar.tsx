import BurgerIcon from './BurgerIcon'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Logo />
      <BurgerIcon />
    </nav>
  )
}

export default Navbar
