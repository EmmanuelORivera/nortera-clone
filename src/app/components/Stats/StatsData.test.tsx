import { screen, render, waitFor } from '@testing-library/react'
import StatsData from './StatsData'

describe('StatsData', () => {
  it('should render the component', () => {
    render(<StatsData data="" description="" />)
  })

  it('should render the correct data', async () => {
    render(<StatsData data="111" description="" />)

    await waitFor(() => {
      const paragraphElement = screen.getByText('111')
      expect(paragraphElement).toBeInTheDocument()
    })
  })

  it('should render the correct description', async () => {
    render(<StatsData data="" description="this is a test description" />)

    await waitFor(() => {
      const paragraphElement = screen.getByText('this is a test description')
      expect(paragraphElement).toBeInTheDocument()
    })
  })
})
