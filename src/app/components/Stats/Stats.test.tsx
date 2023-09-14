import { render, screen } from '@testing-library/react'
import Stats from './Stats'

jest.mock('../GoToArrow/GoToArrow', () => () => {
  const MockedGoToArrow = () => (
    <div data-testid="go-to-arrow">Mocked Child</div>
  )
  MockedGoToArrow.displayName = 'GoToArrow'
  return MockedGoToArrow()
})

describe('Stats', () => {
  it('should render the component without problems', () => {
    render(<Stats />)
  })
  it('should render a heading with the right text', () => {
    render(<Stats />)
    const headingElement = screen.getByRole('heading', {
      name: /nortera in numbers/i,
    })

    expect(headingElement).toBeInTheDocument()
  })
  it('should render an image', () => {
    render(<Stats />)

    const imageElement = screen.getByRole('img')

    expect(imageElement).toBeInTheDocument()
  })

  it('should render a paragraph with the right text', () => {
    render(<Stats />)

    const paragraphElement = screen.getByText(
      /With facilities in Canada and the United States, Nortera processes and markets over 450,000 tons of frozen and canned vegetables per year/i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render "agricultural partners" data', () => {
    render(<Stats />)

    const stats = screen.getByText('800')
    const description = screen.getByText('agricultural partners')

    expect(stats).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render "acres of land cultivated" data', () => {
    render(<Stats />)

    const stats = screen.getByText('120500')
    const description = screen.getByText('acres of land cultivated')

    expect(stats).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render "plants in north america" data', () => {
    render(<Stats />)

    const stats = screen.getByText('13')
    const description = screen.getByText('plants in north america')

    expect(stats).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render a link with the right text', () => {
    render(<Stats />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our approach/i,
    })

    expect(linkElement).toBeInTheDocument()
  })

  it('should have a valid href for the link', () => {
    render(<Stats />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our approach/i,
    })

    expect(linkElement).toHaveAttribute('href', '#')
  })

  it('should render GoToArrow component', () => {
    render(<Stats />)
    const svgElement = screen.getByTestId('go-to-arrow')

    expect(svgElement).toBeInTheDocument()
  })
})
