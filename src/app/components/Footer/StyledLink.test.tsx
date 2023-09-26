import { render, screen } from '@testing-library/react'
import StyledLink from './StyledLink'

describe('StyledLink', () => {
  it('renders a link with default "listItem" style', () => {
    render(<StyledLink href="/some-link">Link Text</StyledLink>)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).not.toHaveClass('uppercase lg:text-[1.1vw] font-semibold')
  })

  it('renders a link with the type equals to "title" style', () => {
    render(
      <StyledLink href="/some-link" type="title">
        Link Text
      </StyledLink>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('uppercase lg:text-[1.1vw] font-semibold')
  })

  it('should have a passing underline hover effect', () => {
    render(
      <StyledLink href="/some-link" type="title">
        Link Text
      </StyledLink>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveClass(
      "before:content-[''] before:absolute before:bg-white before:h-[.5px] before:w-full before:bottom-0 before:rounded before:origin-right before:scale-x-0 before:transition before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
    )
  })
})
