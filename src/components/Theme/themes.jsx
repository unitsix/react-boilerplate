import { css } from 'styled-components'

const colors = {
  primary: '#404040'
}

const breakpoints = [ 40, 52, 64 ]

const space = [ 0, 10, 20, 30, 40 ]

const typography = {
  h1: css`
      color: ${colors.primary};
      font-weight: bold;
      font-size: 42px;
      line-height: 50px;
      letter-spacing: -0.4px;
      -webkit-font-smoothing: antialiased;
    `
}

const shared = {
  colors,
  breakpoints,
  typography,
  breakpoint: {
    small: `${breakpoints[0]}em`,
    medium: `${breakpoints[1]}em`,
    large: `${breakpoints[2]}em`
  },
  space,
  spaces: {
    xsmall: `${space[0]}px`,
    small: `${space[1]}px`,
    medium: `${space[2]}px`,
    large: `${space[3]}px`,
    xlarge: `${space[4]}px`
  },
  fontFamily: 'sans-serif',
  baseFontSize: '15px'
}


export default {
  dark: {
    ...shared
  },
  default: {
    ...shared
  }
}
