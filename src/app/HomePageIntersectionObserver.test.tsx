import { render } from '@testing-library/react'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import { FINAL_ZOOM, MOVE_DOWN_CLASS } from './constants/classNames'
import HomePageIntersectionObserver from './HomePageIntersectionObserver'

jest.mock('./hooks/useIntersectionObserver')
describe('HomePageIntersectionObserver', () => {
  it('calls useIntersectionObserver with the correct arguments', () => {
    render(<HomePageIntersectionObserver />)

    expect(useIntersectionObserver).toHaveBeenCalledWith(
      `.${MOVE_DOWN_CLASS}`, // Selector for MOVE_DOWN_CLASS
      expect.any(Function)
    )

    expect(useIntersectionObserver).toHaveBeenCalledWith(
      `.${FINAL_ZOOM}`, // Selector for FINAL_ZOOM
      expect.any(Function)
    )
  })
})
