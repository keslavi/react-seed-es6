import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { history } from './helpers';

import './App.css';

import Header from './components/header';

import {
  Home,
  Todos,
  Todo,
} from './pages';

//also used when testing /components/header
//this keeps the menu and routes in the same location for editing
export const menu = [
  { text: "home", link: "/" },
  { text: "todo", link: "/todo" },
  //TODO: add support for submenus
  //TODO: possibly add role based visibility options
]

/* NOTE: 
      if you have chromes react devtools extension (and you surely should), and get the error: 
      "DevTools failed to load SourceMap: Could not load content...."

      in the inspector window, 
        - click the gear in the upper right corner
        - uncheck "Enable JavaScript source maps"
*/


//note: this makes a difference for testing between connected and unconnected components
//      (in this case they are the same but including for clarity of testing)
export const App = () => {
  return (
    <div className="App">
      <Container>
        <Router history={history}>
          <Header menu={menu}/>
          <Switch>
          <Route path = '/todo/:id' component={Todo} />
            <Route path = '/todo' component={Todos} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>

      </Container>
    </div>
  );
}

export default App;
