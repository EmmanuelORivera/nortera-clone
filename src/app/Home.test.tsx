import { render, screen } from '@testing-library/react'
import Home from './page'

jest.mock('./components/Hero/Hero', () => () => (
  <div data-testid="hero">Hero component</div>
))

jest.mock('./components/Mosaic/Mosaic', () => () => (
  <div data-testid="mosaic">Mosaic component</div>
))

jest.mock('./components/AboutCompany/AboutCompany', () => () => (
  <div data-testid="about-company">AboutCompany component</div>
))

jest.mock('./components/ImageSlider/ImageSlider', () => () => (
  <div data-testid="image-slider">ImageSlider component</div>
))

jest.mock('./components/BusinessInfo/BusinessInfo', () => () => (
  <div data-testid="business-info">BusinessInfo component</div>
))

describe('Home', () => {
  it('should render the Hero component', () => {
    render(<Home />)

    const hero = screen.getByTestId('hero')

    expect(hero).toBeInTheDocument()
  })

  it('should render the Mosaic component', () => {
    render(<Home />)

    const mosaic = screen.getByTestId('mosaic')

    expect(mosaic).toBeInTheDocument()
  })

  it('should render the AboutCompany component', () => {
    render(<Home />)

    const aboutCompany = screen.getByTestId('about-company')

    expect(aboutCompany).toBeInTheDocument()
  })

  it('should render the ImageSlider component', () => {
    render(<Home />)

    const imageSlider = screen.getByTestId('image-slider')

    expect(imageSlider).toBeInTheDocument()
  })

  it('should render the BusinessInfo component', () => {
    render(<Home />)

    const businessInfo = screen.getByTestId('business-info')

    expect(businessInfo).toBeInTheDocument()
  })
})
