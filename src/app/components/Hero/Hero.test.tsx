import { screen, render } from '@testing-library/react'
import Hero from './Hero'

jest.mock('../../svgComponents/Nortera', () => () => {
  const MockedNortera = () => <div data-testid="nortera">Nortera Component</div>
  MockedNortera.displayName = 'Nortera'
  return MockedNortera()
})

describe('Hero', () => {
  it('should render an image', () => {
    render(<Hero />)

    const heroImage = screen.getByRole('img')

    expect(heroImage).toBeInTheDocument()
  })

  it('renders a paragraph with the specified text', () => {
    render(<Hero />)

    const paragraphElement = screen.getByText(
      /The North American leader in ready-to-cook vegetables/i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render Nortera Component', () => {
    render(<Hero />)

    const component = screen.getByTestId('nortera')

    expect(component).toBeInTheDocument()
  })
})
