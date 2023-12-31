import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import BurgerIcon from './BurgerIcon'

describe('BurgerIcon', () => {
  it('renders BurgerIcon component without problems', () => {
    render(
      <BurgerIcon
        isOpen={false}
        setIsOpen={() => {}}
        setNavigationModalAnimation={() => {}}
      />
    )
  })

  it('should render the burger icon button', () => {
    render(
      <BurgerIcon
        isOpen={false}
        setIsOpen={() => {}}
        setNavigationModalAnimation={() => {}}
      />
    )

    const burgerButton = screen.getByRole('button', { name: 'Burger Icon' })

    expect(burgerButton).toBeInTheDocument()
  })

  it('should have the correct number of burger icon lines', () => {
    render(
      <BurgerIcon
        isOpen={false}
        setIsOpen={() => {}}
        setNavigationModalAnimation={() => {}}
      />
    )

    const burgerLines = screen.getAllByTestId('burger-line')

    expect(burgerLines).toHaveLength(3)
  })

  it('renders the correct classNames on the lines when isOpen has a value of false', () => {
    const initialClassNames = [
      'animate-burgerFirstLineClosed',
      'animate-burgerMiddleLineClosed',
      'animate-burgerLastLineClosed',
    ]

    const setIsOpen = jest.fn()
    const setNavigationModalAnimation = jest.fn()

    render(
      <BurgerIcon
        isOpen={false}
        setIsOpen={setIsOpen}
        setNavigationModalAnimation={setNavigationModalAnimation}
      />
    )

    const burgerLines = screen.getAllByTestId('burger-line')

    burgerLines.forEach((line, index) => {
      expect(line).toHaveClass(initialClassNames[index])
    })
  })

  it('renders the correct classNames on the lines when isOpen has a value of true', () => {
    const classNames = [
      'animate-burgerFirstLine',
      'animate-burgerMiddleLine',
      'animate-burgerLastLine',
    ]
    const setIsOpen = jest.fn()
    const setNavigationModalAnimation = jest.fn()

    render(
      <BurgerIcon
        isOpen={true}
        setIsOpen={setIsOpen}
        setNavigationModalAnimation={setNavigationModalAnimation}
      />
    )

    const burgerLines = screen.getAllByTestId('burger-line')

    burgerLines.forEach((line, index) => {
      expect(line).toHaveClass(classNames[index])
    })
  })

  it('should call the methods setIsOpen and setNavigationModalAnimation when the button is clicked', () => {
    const setIsOpen = jest.fn()
    const setNavigationModalAnimation = jest.fn()

    render(
      <BurgerIcon
        isOpen={false}
        setIsOpen={setIsOpen}
        setNavigationModalAnimation={setNavigationModalAnimation}
      />
    )

    const burgerButton = screen.getByRole('button', { name: 'Burger Icon' })

    fireEvent.click(burgerButton)

    expect(setIsOpen).toHaveBeenCalledTimes(1)
    expect(setNavigationModalAnimation).toHaveBeenCalledTimes(1)
  })
})
