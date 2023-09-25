import { screen, render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('should render the component without problems', () => {
    render(<Footer />)
  })

  it('should display address info from "Canada"', () => {
    render(<Footer />)

    const titleElement = screen.getByText(/canada/i)
    expect(titleElement).toBeInTheDocument()

    const streetElement = screen.getByText(/140, rue de l'Équinoxe/i)
    expect(streetElement).toBeInTheDocument()

    const cityElement = screen.getByText(/Brossard, QC J4Z 0R4/i)
    expect(cityElement).toBeInTheDocument()
  })

  it('should display address info from "United States"', () => {
    render(<Footer />)

    const titleElement = screen.getByText(/united states/i)
    expect(titleElement).toBeInTheDocument()

    const streetElement = screen.getByText(/100 Corporate Woods, Suite 210/i)
    expect(streetElement).toBeInTheDocument()

    const cityElement = screen.getByText(/Rochester, NY 14623/i)
    expect(cityElement).toBeInTheDocument()
  })

  it('should display "Our Food" title and links', () => {
    render(<Footer />)

    const titleElement = screen.getByText(/our food/i)
    expect(titleElement).toBeInTheDocument()

    const linkCustomProducts = screen.getByRole('link', {
      name: /Our Custom Products/i,
    })
    const linkBrands = screen.getByRole('link', { name: /Our Brands/i })

    expect(linkCustomProducts).toBeInTheDocument()
    expect(linkBrands).toBeInTheDocument()
  })

  it('should display "Jobs" title and links', () => {
    render(<Footer />)

    const titleElement = screen.getByText(/jobs/i)
    expect(titleElement).toBeInTheDocument()

    const linkCustomProducts = screen.getByRole('link', {
      name: /working at nortera/i,
    })
    const linkBrands = screen.getByRole('link', { name: /our open positions/i })

    expect(linkCustomProducts).toBeInTheDocument()
    expect(linkBrands).toBeInTheDocument()
  })

  it('should render a link "Our Approach"', () => {
    render(<Footer />)
    const linkElement = screen.getByRole('link', {
      name: /our approach/i,
    })
  })

  it('should render a link "Contact Us"', () => {
    render(<Footer />)
    const linkElement = screen.getByRole('link', {
      name: /contact us/i,
    })
  })

  it('should display "Who we are" title and links', () => {
    render(<Footer />)

    const titleElement = screen.getByText(/who we are/i)
    expect(titleElement).toBeInTheDocument()

    const linkAboutUs = screen.getByRole('link', {
      name: /about us/i,
    })
    const linkOurCommitments = screen.getByRole('link', {
      name: /our commitments/i,
    })

    expect(linkAboutUs).toBeInTheDocument()
    expect(linkOurCommitments).toBeInTheDocument()
  })

  it('should render a link "Press Relations"', () => {
    render(<Footer />)
    const linkElement = screen.getByRole('link', {
      name: /press relations/i,
    })
    expect(linkElement).toBeInTheDocument()
  })

  it('should render a link "FAQ"', () => {
    render(<Footer />)

    const linkElement = screen.getByRole('link', {
      name: /faq/i,
    })
    expect(linkElement).toBeInTheDocument()
  })

  it('should render a link "Partners"', () => {
    render(<Footer />)

    const linkElement = screen.getByRole('link', {
      name: /partners/i,
    })
    expect(linkElement).toBeInTheDocument()
  })

  it('should render a link "Conditions"', () => {
    render(<Footer />)

    const linkElement = screen.getByRole('link', {
      name: /conditions/i,
    })
    expect(linkElement).toBeInTheDocument()
  })
})
