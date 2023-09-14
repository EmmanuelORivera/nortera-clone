import { render, screen } from '@testing-library/react'
import BusinessWrapper from './BusinessWrapper'

describe('BusinessWrapper', () => {
  it('should render the component', () => {
    render(<BusinessWrapper title="" description="" />)
  })
  it('should render a heading with the right text', () => {
    render(<BusinessWrapper title="Our custom products" description="" />)
    const headingElement = screen.getByRole('heading', {
      name: /our custom products/i,
    })

    expect(headingElement).toBeInTheDocument()
  })
  it('should have a paragraph with the right description', () => {
    render(
      <BusinessWrapper
        title=""
        description="With over 260 products and two processing technologies, Nortera helps its customers stand out."
      />
    )
    const paragraphElement = screen.getByText(
      /With over 260 products and two processing technologies, Nortera helps its customers stand out./i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should have the background color "bg-custom-green" when type property is primary', () => {
    render(<BusinessWrapper title="" description="" type="primary" />)

    const wrapper = screen.getByTestId('business-wrapper')

    expect(wrapper).toHaveClass('bg-custom-green')
  })

  it('should have the background color "bg-peachy-baige" when type property is secondary', () => {
    render(<BusinessWrapper title="" description="" type="secondary" />)

    const wrapper = screen.getByTestId('business-wrapper')

    expect(wrapper).toHaveClass('bg-peachy-baige')
  })

  it('should render a children', () => {
    render(
      <BusinessWrapper title="" description="">
        <div data-testid="test-child">Child Content</div>
      </BusinessWrapper>
    )

    const children = screen.getByTestId('test-child')

    expect(children).toBeInTheDocument()
  })
})
