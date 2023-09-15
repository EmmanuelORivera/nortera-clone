import { screen, render, act, waitFor } from '@testing-library/react'
import WrapperIntersectionObserver from './WrapperIntersectionObserver'

describe('WrapperIntersectionObserver', () => {
  it('renders children and applies className', async () => {
    const targetSelector = 'test-target'
    const classNameToAdd = 'test-class'

    act(() => {
      render(
        <WrapperIntersectionObserver
          targetSelector={targetSelector}
          classNameToAdd={classNameToAdd}
        >
          <div className="test-target">Child Content</div>
        </WrapperIntersectionObserver>
      )
    })

    await waitFor(() => {
      expect(screen.getByText('Child Content')).toHaveClass(classNameToAdd)
    })
  })
})
