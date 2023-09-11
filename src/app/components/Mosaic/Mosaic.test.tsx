import { render, screen } from '@testing-library/react'
import Mosaic from './Mosaic'

describe('Mosaic', () => {
  it('should render main image', () => {
    render(<Mosaic />)

    const mosaicImage = screen.getByRole('img')

    expect(mosaicImage).toBeInTheDocument()
  })
})
