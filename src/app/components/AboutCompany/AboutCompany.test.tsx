import { render, screen } from '@testing-library/react'
import AboutCompany from './AboutCompany'

jest.mock('../GoToArrow/GoToArrow', () => () => (
  <div data-testid="child-component">Mocked Child</div>
))

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

  it('should render a link', () => {
    render(<AboutCompany />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our company/i,
    })

    expect(linkElement).toBeInTheDocument()
  })

  it('should have a valid href for the link', () => {
    render(<AboutCompany />)

    const linkElement = screen.getByRole('link', {
      name: /learn about our company/i,
    })

    expect(linkElement).toHaveAttribute('href', '#')
  })

  it('it should render the GoToArrow component', () => {
    render(<AboutCompany />)

    const childComponent = screen.getByTestId('child-component')

    expect(childComponent).toBeInTheDocument()
  })
})
