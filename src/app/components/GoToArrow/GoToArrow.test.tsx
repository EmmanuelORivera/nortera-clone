import { screen, render } from '@testing-library/react'
import GoToArrow from './GoToArrow'

describe('GoToArrow', () => {
  it('should have a span with hover animations', () => {
    render(<GoToArrow />)
    const spanElement = screen.getByTestId('animated-span')

    expect(spanElement).toBeInTheDocument()
    expect(spanElement).toHaveClass('group-hover:animate-hoverIn')
    expect(spanElement).toHaveClass('animate-hoverOut')
  })
  it('should have an arrow svg image', () => {
    render(<GoToArrow className="mx-auto" />)

    const spanElement = screen.getByTestId('wrapper')

    expect(spanElement).toHaveClass('mx-auto')
  })
})
