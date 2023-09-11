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
})
