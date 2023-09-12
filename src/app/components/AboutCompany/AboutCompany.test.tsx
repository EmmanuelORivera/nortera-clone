import { render, screen } from '@testing-library/react'
import AboutCompany from './AboutCompany'

describe('AboutCompany', () => {
  it('should render the component without problems', () => {
    render(<AboutCompany />)
  })

  it('should render a paragraph with the correct text', () => {
    render(<AboutCompany />)

    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    expect(paragraphElement).toBeInTheDocument()
  })
})
