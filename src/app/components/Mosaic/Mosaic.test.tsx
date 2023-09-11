import { render, screen } from '@testing-library/react'
import Mosaic from './Mosaic'

describe('Mosaic', () => {
  it('should render without errors', () => {
    render(<Mosaic />)
  })

  it('should have appropiate alt text for images', () => {
    render(<Mosaic />)

    const mosaicMainImage = screen.getByAltText('mosaic-main-image')
    const mosaicLastImage = screen.getByAltText('mosaic-last-image')

    expect(mosaicMainImage).toBeInTheDocument()
    expect(mosaicLastImage).toBeInTheDocument()
  })

  it('should render a paragraph with the correct content', () => {
    render(<Mosaic />)

    const paragraphElement = screen.getByText(
      'At Nortera, we specialize in the processing and marketing of canned and frozen vegetables. We do everything possible to offer healthy and sustainable food.'
    )

    expect(paragraphElement).toBeInTheDocument()
  })
})
