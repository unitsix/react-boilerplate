
import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import NotFound from '../NotFound'

describe('<NotFound /> is mounted', () => {
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
        <NotFound />
      </ThemeProvider>
    )

    expect(wrapper.getElement()).not.toBeNull()
  })
})
