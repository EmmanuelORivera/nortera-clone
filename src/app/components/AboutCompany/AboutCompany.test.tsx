import { render, screen } from '@testing-library/react'
import AboutCompany from './AboutCompany'
import { MOVE_DOWN_CLASS, MOVE_UP_CLASS } from '@/app/constants/classNames'
import { act } from 'react-dom/test-utils'

jest.mock('../GoToArrow/GoToArrow', () => () => {
  const MockedGoToArrow = () => (
    <div data-testid="child-component">Mocked Child</div>
  )
  MockedGoToArrow.displayName = 'GoToArrow'
  return MockedGoToArrow()
})

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

  it('should have a paragraph with className MOVE_DOWN_CLASS', () => {
    render(<AboutCompany />)

    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    expect(paragraphElement).toHaveClass(MOVE_DOWN_CLASS)
  })

  it('should be added the MOVE_UP_CLASS to the paragraph that it has MOVE_DOWN_CLASS', () => {
    render(<AboutCompany />)
    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    act(() => {
      paragraphElement.classList.add(MOVE_UP_CLASS)
    })

    expect(paragraphElement).toHaveClass(MOVE_DOWN_CLASS)
    expect(paragraphElement).toHaveClass(MOVE_UP_CLASS)
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

  it('should render the GoToArrow component', () => {
    render(<AboutCompany />)

    const childComponent = screen.getByTestId('child-component')

    expect(childComponent).toBeInTheDocument()
  })
})
