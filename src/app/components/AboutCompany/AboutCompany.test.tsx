import { render, screen } from '@testing-library/react'
import AboutCompany from './AboutCompany'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { MOVE_DOWN_CLASS } from '@/app/constants/classNames'

jest.mock('../GoToArrow/GoToArrow', () => () => {
  const MockedGoToArrow = () => (
    <div data-testid="child-component">Mocked Child</div>
  )
  MockedGoToArrow.displayName = 'GoToArrow'
  return MockedGoToArrow()
})

jest.mock('../../hooks/useIntersectionObserver')

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

  it('has a paragraph with a className "MOVE_DOWN_CLASS"', () => {
    render(<AboutCompany />)

    const paragraphElement = screen.getByText(
      /To contribute to the well-being of society through access to the richness of vegetables./i
    )

    expect(paragraphElement).toHaveClass(MOVE_DOWN_CLASS)
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

  it('calls useIntersectionObserver with the correct arguments', () => {
    render(<AboutCompany />)

    expect(useIntersectionObserver).toHaveBeenCalledWith(
      MOVE_DOWN_CLASS,
      expect.any(Function)
    )
  })
})
