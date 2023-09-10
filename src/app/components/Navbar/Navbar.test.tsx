import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

jest.mock('./Logo', () => () => <div data-testid="mocked-logo">Logo</div>)
jest.mock('./BurgerIcon', () => () => (
  <div data-testid="mocked-burger-icon">Burger Icon</div>
))

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />)

    const navbarElement = screen.getByRole('navigation')

    expect(navbarElement).toBeInTheDocument()
  })

  it('should render the Logo Component', () => {
    render(<Navbar />)
    const logoElement = screen.getByTestId('mocked-logo')

    expect(logoElement).toBeInTheDocument()
  })

  it('should render the BurgerIcon Component', () => {
    render(<Navbar />)
    const burgerIconElement = screen.getByTestId('mocked-burger-icon')

    expect(burgerIconElement).toBeInTheDocument()
  })
})
