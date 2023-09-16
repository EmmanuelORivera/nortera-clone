import { render, screen } from '@testing-library/react'
import Stats from './Stats'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { FINAL_ZOOM } from '@/app/constants/classNames'

jest.mock('../../hooks/useIntersectionObserver')

describe('StatsImage', () => {
  it('renders the component without a problem', () => {
    render(<Stats />)
  })

  it('should have an image', () => {
    render(<Stats />)

    expect(screen.getByAltText('betteraves')).toBeInTheDocument()
  })

  it('calls useIntersectionObserver with the correct arguments', () => {
    render(<Stats />)

    expect(useIntersectionObserver).toHaveBeenCalledWith(
      FINAL_ZOOM,
      expect.any(Function)
    )
  })
})
