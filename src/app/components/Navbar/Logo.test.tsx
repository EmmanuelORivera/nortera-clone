import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('should render an anchor tag with an SVG', () => {
    render(<Logo />)
    const linkElement = screen.getByRole('link')
    const svgElement = screen.getByTestId('navbar-svg')

    expect(linkElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
})
