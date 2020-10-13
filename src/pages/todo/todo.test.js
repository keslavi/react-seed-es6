
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from '../../helpers';
import config from '../../config';
import { mount } from 'enzyme';

import { mockTodo as mdata } from '../../store/mock';
import { mhttp, createMockStore,mstore } from '../../store/mockstore';
import Todo from './todo';
import {clone} from '../../helpers';

/* 
    since saga is used for loading the data, need to mock the store
*/

const url = `${config.api}/todo`;


//mocking router history for selecting items
mhttp.onGet(url).reply(200, mdata.response.list);
const mHistory = history;
mHistory.push = jest.fn();  //just a function stub to prevent things from blowing up.

//doing this to inkect different results into the store
const mountComponent = (store, id=0) => {
    const mstore = createMockStore(store);

    //https://stackoverflow.com/questions/48895514/how-do-you-test-router-match-params-with-jest-and-enzyme

    return mount(
        <Provider store={mstore}>
            <Router history={mHistory}>
                <Todo 
                    match={{params: {id}, isExact: true, path: "", url: ""}}                
                />
            </Router>
        </Provider>
    )
}

describe('Todo Component', () => {
    describe('init', () => {
        it('should display no data', () => {
            const st= clone(mdata.store.post)
            delete st.todo;
            const wrapper = mountComponent(st);

            expect (wrapper.find('#noItem').length).toEqual(1);
            expect(wrapper.find(Todo).length).toEqual(1);
        });
    });

    describe('Todos Data Handling', () => {
        // let wrapper = null;
        // beforeEach(()=>{
        //     wrapper = mountComponent((mdata.store.post, 2));
        // })

        afterEach(()=>{
            jest.clearAllMocks();
        })

        it('should display data ', () => {
            const wrapper = mountComponent(mdata.store.post,2);

            expect (wrapper.find('#hasItem').length).toEqual(1);
            
        });
        // it('should display data', () => {
        //     const wrapper = mountComponent((mdata.store.post, 2));

        //     expect(wrapper.find("#hasItem").length).toEqual(1);

        //     //testing the rows returned
        //     //https://stackoverflow.com/questions/48308734/testing-data-within-table-component-in-react-using-enzyme

        //     // const rows = wrapper.find(".todo-row");
        //     // expect(rows.length).toEqual(3);
        // });
    });
});


