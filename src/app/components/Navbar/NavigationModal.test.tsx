import { screen, render } from '@testing-library/react'
import NavigationModal from './NavigationModal'

describe('NavigationModal', () => {
  it('should render the component without problems', () => {
    render(<NavigationModal isOpen={false} />)
  })

  it('should have a button with the "our food +" text', () => {
    render(<NavigationModal isOpen={true} />)

    const buttonElement = screen.getByRole('button', { name: 'our food +' })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should have a link with the text "our approach" and has a correct href attribute', () => {
    render(<NavigationModal isOpen={true} />)

    const linkElement = screen.getByRole('link', { name: 'our approach' })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '#')
  })

  it('should have a link with the text "jobs" and has a correct href attribute', () => {
    render(<NavigationModal isOpen={true} />)

    const linkElement = screen.getByRole('link', { name: 'jobs' })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '#')
  })

  it('should have a button with the "who we are +" text', () => {
    render(<NavigationModal isOpen={true} />)

    const buttonElement = screen.getByRole('button', { name: 'who we are +' })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should have a link with the text "contact us" and has a correct href attribute', () => {
    render(<NavigationModal isOpen={true} />)

    const linkElement = screen.getByRole('link', { name: 'contact us' })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '#')
  })
})
