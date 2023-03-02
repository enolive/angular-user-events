import {AppComponent} from './app.component'
import {render, screen} from '@testing-library/angular'
import userEvent from '@testing-library/user-event'

describe('AppComponent', () => {
  it('works', async () => {
    const view = await render(AppComponent)

    const button = screen.getByRole('button')
    await userEvent.click(button)
    // workaround option 3: trigger detectChanges
    // view.detectChanges()

    // workaround option 1: using fireEvent instead of userEvent fixes the test
    // fireEvent.click(button)

    // workaround option 3: waitFor fixes the test
    // await waitFor(() => {
    expect(screen.getByRole('status')).toHaveTextContent('You pressed the button!')
    // })
  })
})
