import React from 'react'
import ReactDOM from 'react-dom'

/* eslint-disable no-unused-vars */
import polyfill from 'raf/polyfill'
/* eslint-enable no-unused-vars */

import App from './components/App'

document.body.innerHTML = '<div id="root"></div>'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
