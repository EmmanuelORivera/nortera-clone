import { render, screen } from '@testing-library/react'
import Home from './page'

jest.mock('./components/Hero/Hero', () => () => {
  const MockedHero = () => <div data-testid="hero">Hero component</div>
  MockedHero.displayName = 'Hero'
  return MockedHero()
})

jest.mock('./components/Mosaic/Mosaic', () => () => {
  const MockedMosaic = () => <div data-testid="mosaic">Mosaic component</div>
  MockedMosaic.displayName = 'Mosaic'
  return MockedMosaic()
})

jest.mock('./components/AboutCompany/AboutCompany', () => () => {
  const MockedAboutCompany = () => (
    <div data-testid="about-company">AboutCompany component</div>
  )
  MockedAboutCompany.displayName = 'AboutCompany'
  return MockedAboutCompany()
})

jest.mock('./components/ImageSlider/ImageSlider', () => () => {
  const MockedImageSlider = () => (
    <div data-testid="image-slider">ImageSlider component</div>
  )
  MockedImageSlider.displayName = 'ImageSlider'
  return MockedImageSlider()
})

jest.mock('./components/BusinessInfo/BusinessInfo', () => () => {
  const MockedBusinessInfo = () => (
    <div data-testid="business-info">BusinessInfo component</div>
  )
  MockedBusinessInfo.displayName = 'BusinessInfo'
  return MockedBusinessInfo()
})

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
