import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Warning from './views/warning'
import Home1 from './views/home1'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/home" />
        <Route exact component={Warning} path="/warning" />
        <Route exact component={Home1} path="/home1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
