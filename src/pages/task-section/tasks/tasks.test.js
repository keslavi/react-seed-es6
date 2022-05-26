import { screen } from '@testing-library/react';

import {
  ACT,
  config,
  mountComponent,
  //mhttp,
  httpOverride,  
} from 'tester'
import {mockTasks as mdata } from 'tester';

const mhttp = httpOverride();

import TestComponent from './tasks';
const mount=mountComponent(TestComponent);

describe('tasks component', () => { 
  it('should render if empty', () => {

    //alt if we need more control
    //const {store,container}= mount(mdata.store.init);

    mount(mdata.store.init);    

    screen.getByTestId('tasks-noitems');
  });

  describe('has data',()=>{
    it('should display data',()=>{
      mount(mdata.store.state);

      screen.getByText(/subject.+a/);
    })
  })


})