
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Theme } from './styles'
import HelloWorld from '../../pages/hello-world/HelloWorld'
import NotFound from '../../pages/not-found/NotFound'

export default class App extends Component {
  render = () =>
    <Theme>
      <Router>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Theme>
}
