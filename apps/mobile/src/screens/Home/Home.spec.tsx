import { renderWithGP } from '~/utils/tests'
import { Home } from '.'

describe('Home Screen', () => {
  it('should render correctly', () => {
    renderWithGP(<Home />)
  })
})
