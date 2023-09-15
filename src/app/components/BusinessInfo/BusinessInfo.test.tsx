import { screen, render } from '@testing-library/react'
import BusinessInfo from './BusinessInfo'

describe('BusinessInfo', () => {
  it('should render the component', () => {
    render(<BusinessInfo />)
  })

  it('should render BusinessWrapper components with correct content', () => {
    render(<BusinessInfo />)
    const businessWrappers = screen.getAllByTestId('business-wrapper')

    const expectedContent = [
      {
        title: 'Our custom products',
        description:
          'With over 260 products and two processing technologies, Nortera helps its customers stand out.',
      },
      {
        title: 'Our Brands',
        description:
          'Our brands offer consumers favorite vegetables, legumes, and fruits.',
      },
    ]

    expect(businessWrappers.length).toBe(2)

    businessWrappers.forEach((_, index) => {
      const { title, description } = expectedContent[index]
      const titleElement = screen.getByText(title)
      const descriptionElement = screen.getByText(description)

      expect(titleElement).toBeInTheDocument()
      expect(descriptionElement).toBeInTheDocument()
    })
  })
})
