import { act, render, screen } from '@testing-library/react'
import Stats from './Stats'
import { FINAL_ZOOM, INITIAL_ZOOM } from '@/app/constants/classNames'

describe('StatsImage', () => {
  it('renders the component without a problem', () => {
    render(<Stats />)
  })

  it('should have an image', () => {
    render(<Stats />)

    expect(screen.getByAltText('betteraves')).toBeInTheDocument()
  })

  it('should an image with the class FINAL_ZOOM', () => {
    render(<Stats />)

    expect(screen.getByAltText('betteraves')).toHaveClass(FINAL_ZOOM)
  })

  it('should add the class INITIAL_ZOOM', () => {
    render(<Stats />)

    const imageElement = screen.getByAltText('betteraves')

    act(() => {
      imageElement.classList.add(INITIAL_ZOOM)
    })
    expect(imageElement).toHaveClass(FINAL_ZOOM)
    expect(imageElement).toHaveClass(INITIAL_ZOOM)
  })
})
