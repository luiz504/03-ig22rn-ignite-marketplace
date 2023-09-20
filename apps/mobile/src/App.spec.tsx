import { render, screen } from '~/utils/tests'
import { App } from './App'
describe('App', () => {
  it('should render initially', () => {
    render(<App />)
    expect(screen.getByTestId('container')).toBeOnTheScreen()
  })
})
