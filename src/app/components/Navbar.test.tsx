import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render an anchor tag with an SVG', () => {
    render(<Navbar />)
    const linkElement = screen.getByRole('link')
    const svgElement = screen.getByTestId('navbar-svg')

    expect(linkElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })

  it('should render the burger icon button', () => {
    render(<Navbar />)

    const burgerButton = screen.getByRole('button', { name: 'Burger Icon' })

    expect(burgerButton).toBeInTheDocument()
  })

  it('should have the correct number of burger icon lines', () => {
    render(<Navbar />)

    const burgerLines = screen.getAllByTestId('burger-line')

    expect(burgerLines).toHaveLength(3)
  })
})
