import { screen, render } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('should render an image', () => {
    render(<Hero />)

    const heroImage = screen.getByRole('img')

    expect(heroImage).toBeInTheDocument()
  })

  it('renders a paragraph with the specified text', () => {
    render(<Hero />)

    const paragraphElement = screen.getByText(
      /The North American leader in ready-to-cook vegetables/i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render a heading with "Nortera" as inner text', () => {
    render(<Hero />)

    const headingElement = screen.getByRole('heading')

    expect(headingElement).toBeInTheDocument()
    expect(screen.getByText('Nor')).toBeInTheDocument()
    expect(screen.getByText('tera')).toBeInTheDocument()
  })
})
