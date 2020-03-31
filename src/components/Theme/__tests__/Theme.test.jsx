/* eslint-env jest */
import Example from '../__mocks__/Example'

describeComponent(Example, (component) => {
  it('renders in default mode', () => {
    component.defaultProps = { children: 'hello world' }
    expect(component.snapshot()).toMatchSnapshot()
  })
  it('renders in dark mode', () => {
    component.defaultProps = { children: 'hello world', dark: true }
    expect(component.snapshot()).toMatchSnapshot()
  })
})
