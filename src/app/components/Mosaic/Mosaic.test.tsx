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
})
