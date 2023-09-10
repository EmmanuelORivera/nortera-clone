import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />)

    const navbarElement = screen.getByRole('navigation')

    expect(navbarElement).toBeInTheDocument()
  })

  it('should render the Logo Component', () => {
    render(<Navbar />)
    const logoElement = screen.getByRole('link')

    expect(logoElement).toBeInTheDocument()
  })

  it('should render the BurgerIcon Component', () => {
    render(<Navbar />)
    const burgerIconElement = screen.getByRole('button', {
      name: 'Burger Icon',
    })

    expect(burgerIconElement).toBeInTheDocument()
  })
})
