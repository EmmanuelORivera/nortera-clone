import { screen, render } from '@testing-library/react'
import NavigationModal from './NavigationModal'

describe('NavigationModal', () => {
  it('should render the component without problems', () => {
    render(<NavigationModal isOpen={false} />)
  })
})
