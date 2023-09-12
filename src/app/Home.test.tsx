import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('should render the Hero component', () => {
    render(<Home />)

    const heroImage = screen.getByAltText('hero-image')

    expect(heroImage).toBeInTheDocument()
  })

  it('should render the Mosaic component', () => {
    render(<Home />)

    const mosaicMainImage = screen.getByAltText('mosaic-main-image')

    expect(mosaicMainImage).toBeInTheDocument()
  })

  it('should render the AboutCompany component', () => {
    render(<Home />)

    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    expect(paragraphElement).toBeInTheDocument()
  })
})
