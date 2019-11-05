import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import History from './components/History'
class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Route exact path='/'>
            <Home/>
            </Route>
            <Route path ='/notre-histoire'>
            <History/>
            </Route>
          </div>
        </BrowserRouter>
      </header>
    </div>
  )}
}

export default App;
