import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/home' component={Home} />
      <Route>
        <Redirect to='/home' />
      </Route>
    </Switch>
  )
}

export default AppRouter
