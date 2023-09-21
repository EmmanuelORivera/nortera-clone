import { render, screen, waitFor } from '@testing-library/react'
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

  it('should render a paragraph with the right text', async () => {
    render(<Stats />)

    await waitFor(() => {
      const paragraphElement = screen.getByText(
        /With facilities in Canada and the United States, Nortera processes and markets over 450,000 tons of frozen and canned vegetables per year/i
      )
      expect(paragraphElement).toBeInTheDocument()
    })
  })

  it('should render "agricultural partners" data', async () => {
    render(<Stats />)

    await waitFor(() => {
      const stats = screen.getByText('800')
      expect(stats).toBeInTheDocument()
    })
    await waitFor(() => {
      const description = screen.getByText('agricultural partners')
      expect(description).toBeInTheDocument()
    })
  })

  it('should render "acres of land cultivated" data', async () => {
    render(<Stats />)

    await waitFor(() => {
      const stats = screen.getByText('120500')
      expect(stats).toBeInTheDocument()
    })
    await waitFor(() => {
      const description = screen.getByText('acres of land cultivated')
      expect(description).toBeInTheDocument()
    })
  })

  it('should render "plants in north america" data', async () => {
    render(<Stats />)

    await waitFor(() => {
      const stats = screen.getByText('13')
      expect(stats).toBeInTheDocument()
    })
    await waitFor(() => {
      const description = screen.getByText('plants in north america')
      expect(description).toBeInTheDocument()
    })
  })

  it('should render "permanent and seasonal employees" data', async () => {
    render(<Stats />)

    await waitFor(() => {
      const stats = screen.getByText('3500')
      expect(stats).toBeInTheDocument()
    })

    await waitFor(() => {
      const description = screen.getByText('permanent and seasonal employees')
      expect(description).toBeInTheDocument()
    })
  })

  it('should render a link with the right text', () => {
    render(<Stats />)

    const linkElements = screen.getAllByRole('link', {
      name: /learn about our approach/i,
    })

    linkElements.forEach((linkelement) => {
      expect(linkelement).toBeInTheDocument()
    })
  })

  it('should have a valid href for the link', () => {
    render(<Stats />)

    const linkElements = screen.getAllByRole('link', {
      name: /learn about our approach/i,
    })

    linkElements.forEach((linkelement) => {
      expect(linkelement).toHaveAttribute('href', '#')
    })
  })

  it('should render 2 GoToArrow components', () => {
    render(<Stats />)
    const svgElements = screen.getAllByTestId('go-to-arrow')

    expect(svgElements.length).toBe(2)
  })
})
