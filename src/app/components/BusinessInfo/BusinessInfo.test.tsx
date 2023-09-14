import { screen, render } from '@testing-library/react'
import BusinessInfo from './BusinessInfo'

jest.mock('./BusinessWrapper', () => () => (
  <div data-testid="business-wrapper">Wrapper</div>
))

describe('BusinessInfo', () => {
  beforeEach(() => {
    render(<BusinessInfo />)
  })
  it('should render the component', () => {})

  it('should render the BusinessWrapper component', () => {
    const businessWrapper = screen.getByTestId('business-wrapper')

    expect(businessWrapper).toBeInTheDocument()
  })
})
