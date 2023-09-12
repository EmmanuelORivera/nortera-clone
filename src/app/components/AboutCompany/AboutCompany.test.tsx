import { render, screen } from '@testing-library/react'
import AboutCompany from './AboutCompany'

describe('AboutCompany', () => {
  it('should render the component without problems', () => {
    render(<AboutCompany />)
  })

  it('should render a paragraph with the correct text', () => {
    render(<AboutCompany />)

    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render a link', () => {
    render(<AboutCompany />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our company/i,
    })

    expect(linkElement).toBeInTheDocument()
  })

  it('should have a valid href for the link', () => {
    render(<AboutCompany />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our company/i,
    })

    expect(linkElement.getAttribute('href')).toEqual('#')
  })

  it.only('should have a span with hover animations', () => {
    render(<AboutCompany />)

    const spanElement = screen.getByTestId('animated-span')

    screen.debug()
    expect(spanElement).toBeInTheDocument()
    expect(spanElement).toHaveClass('group-hover:animate-hoverIn')
    expect(spanElement).toHaveClass('animate-hoverOut')
  })
})
