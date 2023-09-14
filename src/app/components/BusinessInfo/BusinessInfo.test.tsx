import { screen, render } from '@testing-library/react'
import BusinessInfo from './BusinessInfo'

jest.mock('./BusinessWrapper', () => () => {
  const MockedBusinessWrapper = () => (
    <div data-testid="business-wrapper">Wrapper</div>
  )

  MockedBusinessWrapper.displayName = 'BusinessWrapper'
  return MockedBusinessWrapper()
})

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
