
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from '../../helpers';
import config from '../../config';
import { mount } from 'enzyme';

import { mockTodo as mdata } from '../../store/mock';
import { mhttp, createMockStore,mstore } from '../../store/mockstore';
import Todos from './todos';

/* 
    since saga is used for loading the data, need to mock the store
*/

const url = `${config.api}/todo`;


//mocking router history for selecting items
mhttp.onGet(url).reply(200, mdata.response.list);
const mHistory = history;
mHistory.push = jest.fn();  //just a function stub to prevent things from blowing up.

//doing this to inkect different results into the store
const mountComponent = (store) => {
    const mstore = createMockStore(store);
    return mount(
        <Provider store={mstore}>
            <Router history={mHistory}>
                <Todos />
            </Router>
        </Provider>
    )
}

describe('Todos Component', () => {
    describe('init', () => {
        it('should display no data', () => {
            const wrapper = mountComponent(mdata.store.init);

            expect (wrapper.find('#noItems').length).toEqual(1);
            expect(wrapper.find(Todos).length).toEqual(1);
        });
    });

    describe('Todos Data Handling', () => {
        let wrapper = null;
        beforeEach(()=>{
            wrapper = mountComponent((mdata.store.post));
        })

        afterEach(()=>{
            jest.clearAllMocks();
        })

        it('should display data', () => {
            // const wrapper = mountComponent((mdata.store.post));
            // testing data two different ways... always go for the simplest possible and expand
            expect(wrapper.find("#hasItems").length).toEqual(1);

            //testing the rows returned
            //https://stackoverflow.com/questions/48308734/testing-data-within-table-component-in-react-using-enzyme

            const rows = wrapper.find(".todo-row");
            expect(rows.length).toEqual(3);
        });
        
        it('should select an item', () => {
            const pass=['/todo/1'];

            wrapper.find('#tr-1').simulate('click');
            expect (mHistory.push.mock.calls[0]).toEqual(pass);
        });

        it('should add an item', () => {
            const pass=['/todo/0'];

            //https://codeburst.io/testing-react-events-with-jest-and-enzyme-ii-46fbe4b8b589
            // .at(0) works, something to do with virtual dom
            wrapper.find('#addItem').at(0).simulate('click');

            expect (mHistory.push.mock.calls[0]).toEqual(pass);
        });
    });
});


