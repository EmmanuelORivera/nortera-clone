import { render, screen } from '@testing-library/react'
import BurgerIcon from './BurgerIcon'

describe('BurgerIcon', () => {
  it('should render the burger icon button', () => {
    render(<BurgerIcon />)

    const burgerButton = screen.getByRole('button', { name: 'Burger Icon' })

    expect(burgerButton).toBeInTheDocument()
  })

  it('should have the correct number of burger icon lines', () => {
    render(<BurgerIcon />)

    const burgerLines = screen.getAllByTestId('burger-line')

    expect(burgerLines).toHaveLength(3)
  })
})
