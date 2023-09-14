import { screen, render } from '@testing-library/react'
import BusinessInfo from './BusinessInfo'

jest.mock('./BusinessWrapper', () => () => (
  <div data-testid="business-wrapper">Wrapper</div>
))

describe('BusinessInfo', () => {
  it('should render the component', () => {
    render(<BusinessInfo />)
  })

  it('should render the BusinessWrapper component', () => {
    render(<BusinessInfo />)
    const businessWrapper = screen.getByTestId('business-wrapper')

    expect(businessWrapper).toBeInTheDocument()
  })
})
