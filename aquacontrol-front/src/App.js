import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Login}/>
    </div>
  </Router>
)

export default App
