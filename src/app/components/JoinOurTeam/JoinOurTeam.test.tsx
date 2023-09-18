import { render, screen } from '@testing-library/react'
import JoinOurTeam from './JoinOurTeam'

jest.mock('../GoToArrow/GoToArrow', () => () => {
  const MockedGoToArrow = () => (
    <div data-testid="child-component">Mocked Child</div>
  )
  MockedGoToArrow.displayName = 'GoToArrow'
  return MockedGoToArrow()
})

describe('JoinOurTeam', () => {
  it('renders the component without problems', () => {
    render(<JoinOurTeam />)
  })

  it('should render a main image', () => {
    render(<JoinOurTeam />)

    const imageElement = screen.getByAltText('workin people')

    expect(imageElement).toBeInTheDocument()
  })

  it('should have a heading with the correct text', () => {
    render(<JoinOurTeam />)

    const headingElement = screen.getByRole('heading', {
      name: /join our team/i,
    })

    expect(headingElement).toBeInTheDocument()
  })

  it('should have a paragraph with the correct text', () => {
    render(<JoinOurTeam />)

    const paragraphElement = screen.getByText(
      /Come grow with us. Learn more about our operations, production, and corporate job openings!/i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render the GoToArrow component', () => {
    render(<JoinOurTeam />)

    const component = screen.getByTestId('child-component')
    expect(component).toBeInTheDocument()
  })

  it('should render a link', () => {
    render(<JoinOurTeam />)

    const linkElement = screen.getByRole('link', { name: /work at nortera/i })

    expect(linkElement).toBeInTheDocument()
  })

  it('should have a valid href for the link', () => {
    render(<JoinOurTeam />)

    const linkElement = screen.getByRole('link', { name: /work at nortera/i })

    expect(linkElement).toHaveAttribute('href', '#')
  })

  it('should have a secondary image', () => {
    render(<JoinOurTeam />)

    const imgElement = screen.getByAltText('team member')

    expect(imgElement).toBeInTheDocument()
  })
})
