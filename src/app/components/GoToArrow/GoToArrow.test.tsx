import { screen, render } from '@testing-library/react'
import GoToArrow from './GoToArrow'

describe('GoToArrow', () => {
  it('should have a span with hover animations', () => {
    render(<GoToArrow />)
    const spanElement = screen.getByTestId('animated-span')

    expect(spanElement).toBeInTheDocument()
    expect(spanElement).toHaveClass('group-hover:animate-hoverIn')
    expect(spanElement).toHaveClass('animate-hoverOut')
  })
  it('should have an arrow svg image', () => {
    render(<GoToArrow className="mx-auto" />)

    const spanElement = screen.getByTestId('wrapper')

    expect(spanElement).toHaveClass('mx-auto')
  })

  it('should render right size of wrapper if type basic is passed', () => {
    render(<GoToArrow type="basic" />)

    const wrapper = screen.getByTestId('wrapper')

    expect(wrapper).toHaveClass(
      'w-[10.66vw] h-[10.66vw] md:w-[2.77vw] md:h-[2.77vw]'
    )
  })

  it('should render right size of wrapper if type big is passed', () => {
    render(<GoToArrow type="big" />)

    const wrapper = screen.getByTestId('wrapper')

    expect(wrapper).toHaveClass(
      'w-[15.66vw] h-[15.66vw] md:w-[7.77vw] md:h-[7.77vw]'
    )
  })
})
