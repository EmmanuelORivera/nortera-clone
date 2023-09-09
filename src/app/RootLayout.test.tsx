import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

jest.mock('./components/Navbar', () => () => (
  <div data-testid="mocked-navbar">Navbar</div>
))

describe('RootLayout', () => {
  it('should render Navbar component', () => {
    render(<RootLayout>Hello World!!</RootLayout>)

    screen.debug()
    const navbarElement = screen.getByTestId('mocked-navbar')
    expect(navbarElement).toBeInTheDocument()
  })
})
