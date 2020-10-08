import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { history } from './helpers';

import './App.css';

import Header from './components/header';

import {
  Home
} from './pages';

//also used when testing /components/header
export const menu = [
  { text: "home", link: "/" },
  { text: "todo", link: "/todo" },
  //TODO: add support for submenus
  //TODO: possibly add role based visibility options
]


//note: this makes a difference for testing between connected and unconnected components
//      (in this case they are the same but including for clarity of testing)
export function App() {
  return (
    <div className="App">
      <Container>
        <Router history={history}>
          <Header menu={menu}/>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>

      </Container>
    </div>
  );
}

export default App;
