import React from 'react';
import ReactDom from 'react-dom';
import {Route} from 'react-router';

import {shallow} from 'enzyme';

import {App} from './App'; //in this case it doesn't matter, but for testing you'll usually want to pull the unconnected component

describe ('App Component', () => {
    const wrapper = shallow(<App/>);
    it ('should render without crashing', ()=>{
        expect (wrapper.exists()).toBe(true);
    })

    describe ("Routes check", ()=>{
      const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      },{});

      it ('has a Home',()=>{
        expect (wrapper.find('Route').debug()).toContain(': Home');
      })

      // it('has a connected ToDo',()=>{
      //   expect (pathMap['/todo'].displayName).toBe('Connect(withRouter(ToDos))');
      // })
    })
})