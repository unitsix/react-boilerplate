
import React, { Component } from 'react'
import Theme from '../Theme'
import PropTypes from 'prop-types'

export default class Example extends Component {
  render = () => {
    const {children, dark = false} = this.props
    return (
      <Theme dark={dark}>
          {children}
      </Theme>
    )
  }
}

Example.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool
}