
import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import HelloWorld from '../HelloWorld'

describe('<HelloWorld /> is mounted', () => {
  it('renders', () => {

    const typography = {
      copy: ''
    }

    const breakpoints = [ 36, 48, 62, 75 ]

    const colors = {
      white: '#ffffff',
      orange: '#ff5500'
    }

    const theme = {
      typography,
      colors,
      breakpoint: {
        small: `${breakpoints[0]}em`,
        medium: `${breakpoints[1]}em`,
        large: `${breakpoints[2]}em`,
        xlarge: `${breakpoints[3]}em`
      }
    }

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <HelloWorld />
      </ThemeProvider>
    )

    expect(wrapper.getElement()).not.toBeNull()
  })
})
