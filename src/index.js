import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import EpilepsyWarning from './views/epilepsy-warning'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/home" />
        <Route exact component={EpilepsyWarning} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
