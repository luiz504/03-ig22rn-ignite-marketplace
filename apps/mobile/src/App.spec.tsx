import { render, screen, waitFor } from '~/utils/tests'
import * as SplashScreen from 'expo-splash-screen'
import { App } from './App'

jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
}))
jest.mock('expo-splash-screen')
describe('App', () => {
  jest.useFakeTimers()
  it('should load the font correctly', async () => {
    const hideAsyncSpy = jest.spyOn(SplashScreen, 'hideAsync')
    const { toJSON } = render(<App />)
    expect(toJSON()).toBeNull()

    await waitFor(() => expect(hideAsyncSpy).toBeCalledTimes(1))

    await waitFor(() => expect(screen.getByTestId('root')).toBeOnTheScreen())
  })
})
