import { render } from '@testing-library/react'
import LoadInitialUseEffects from './LoadInitialUseEffects'

describe('LoadInitialUseEffects component', () => {
  it('sets window history scroll restoration to "manual"', () => {
    // Mock the window object to capture changes to window.history.scrollRestoration
    const originalHistory = window.history
    const mockHistory = { ...originalHistory }
    Object.defineProperty(window, 'history', {
      value: mockHistory,
      writable: true,
    })

    // Render the component
    render(<LoadInitialUseEffects />)

    // Assert that window.history.scrollRestoration has been set to "manual"
    expect(mockHistory.scrollRestoration).toBe('manual')
  })
})
