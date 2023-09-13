import { screen, render } from '@testing-library/react'
import ImageSlider from './ImageSlider'

describe('ImageSlider', () => {
  it('should render the component', () => {
    render(<ImageSlider />)
  })

  it('renders the correct number of slides', () => {
    render(<ImageSlider />)

    const slides = screen.getAllByTestId('slide')

    expect(slides.length).toBe(20)
  })

  it('renders the slide content correctly', () => {
    render(<ImageSlider />)

    const slideText = screen.getAllByText(/our food/i)

    expect(slideText.length).toBe(20)
  })

  it('should have two divs with class names "flex whitespace-nowrap animate-slide"', () => {
    render(<ImageSlider />)
    const divs = screen.getAllByTestId('slider-animated')

    expect(divs.length).toBe(2)

    divs.forEach((div) => {
      expect(div).toBeInTheDocument()
      expect(div).toHaveClass('flex')
      expect(div).toHaveClass('whitespace-nowrap')
      expect(div).toHaveClass('animate-slide')
    })
  })
})
