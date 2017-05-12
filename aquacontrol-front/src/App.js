import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login';
import Menu from './components/Menu';
import OrderNew from './components/OrderNew';
import OrderList from './components/OrderList';
import EmployeeList from './components/EmployeeList';
import BottleList from './components/BottleList';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/orders/new" component={OrderNew}/>
      <Route exact path="/orders" component={OrderList}/>
      <Route exact path="/employees" component={EmployeeList}/>
      <Route exact path="/bottles" component={BottleList}/>
    </div>
  </Router>
)

export default App
