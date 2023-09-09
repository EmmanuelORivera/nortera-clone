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
})
