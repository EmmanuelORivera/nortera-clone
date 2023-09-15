import { renderHook, act, waitFor } from '@testing-library/react'
import useIntersectionObserver from './useIntersectionObserver'

describe('useIntersectionObserver', () => {
  it('should observe elements with the specified class name', async () => {
    const targetSelector = 'test-class'
    const callback = jest.fn()

    const { unmount } = renderHook(() =>
      useIntersectionObserver(targetSelector, callback)
    )

    // create the dom element with the target class name
    const element = document.createElement('div')
    element.className = targetSelector
    document.body.appendChild(element)

    // trigger intersection
    act(() => {
      const observer = new IntersectionObserver((entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && callback(entry.target)
        )
      )
      observer.observe(element)
    })

    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1)
      unmount()
    })
  })
})
