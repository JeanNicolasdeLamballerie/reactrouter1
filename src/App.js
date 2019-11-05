import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import History from './components/History'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <BrowserRouter>
            <div>
              <NavLink to='/notre-histoire'>To history.</NavLink>
              <NavLink to='/'>Back to homeland.</NavLink>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/notre-histoire'>
                  <History />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </header>
      </div>
    )
  }
}

export default App;
