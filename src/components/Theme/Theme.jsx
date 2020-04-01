import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import { ThemeWrapper } from './styles'
import GlobalStyle from './global-styles'

class Theme extends React.Component {
  render = () => {
    const { children, dark = false } = this.props
    const theme = themes[dark ? 'dark' : 'default']
    document.body.style = theme.body
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </ThemeProvider>
    )
  }
}

Theme.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool
}

export default Theme
