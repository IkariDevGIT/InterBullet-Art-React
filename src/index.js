import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home1 from './views/home1'
import Warning from './views/warning'
import Home from './views/home'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home1} path="/home1" />
        <Route exact component={Warning} path="/" />
        <Route exact component={Home} path="/home" />
        <Route exact component={Page} path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
