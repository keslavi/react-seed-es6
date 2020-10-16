import React from "react";
import { fireEvent, getByText, render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

import { Router } from "react-router-dom";
import Todo from './todo';
import { clone } from '../../helpers';
import { act } from "react-dom/test-utils";
import { history } from '../../helpers';
import { mockTodo as mdata } from '../../store/mock';
import { mhttp, createMockStore, mstorePromise as mstore } from '../../store/mockstore';
import config from '../../config';
import _ from 'lodash';
import waitUntil from "async-wait-until";

const mHistory = history;
mHistory.push = jest.fn();  //just a function stub to prevent things from blowing up.
const actTodo_R = jest.fn();
const actTodo_U = jest.fn();
const mockCallBack = jest.fn();

import mockAdapter from 'axios-mock-adapter';
import axios from 'axios';

//mocking router history for selecting items
const url = `${config.api}/todo`;// import { mount } from 'enzyme';
mhttp.onGet(url).reply(200, mdata.response.todo);
mhttp.onPost(url).reply(200,mdata.response.todo);


const mount2 = (state, id = 0) => {
    const mstore = createMockStore(state);
    return rtlRender(
        <Provider store={mstore}>
            <Router history={mHistory}>
                <Todo match={{ params: { id: id }, isExact: true, path: "", url: "" }} />
            </Router>
        </Provider>
    )
}


describe('Todo component', () => {
    it('should open with no items', () => {
        const st = {}; //clone(mdata.store.post)
        const wrapper = mount2(st);
    
        //check if div< id='noItem'> exists
        const test=!_.isEmpty(wrapper.getByText('...'));
    
        expect(test).toBe(true);
    })
    
    it('should open form when data exists',async done=>{
        const st = clone(mdata.store.init);

        const http=new mockAdapter(axios);
        http.onGet(`${url}/2`).reply(200,mdata.response.todo);

        const wrapper = mount2(st,2);

        await(waitUntil(()=>{
            return !_.isEmpty(wrapper.getByText('Subject'))
        }));
        
        

        
        //check  if the form exists
        const test=!_.isEmpty(wrapper.getByText('Subject'));
    
        expect(test).toBe(true);
        done();
    })

    // it('should submit', async() => {
        
    //     const st = clone(mdata.store.post);
    //     const wrapper = mount2(st);


    //     await act(async () => {
    //         fireEvent.click(wrapper.getByText("Submit"));
    //     });        

    //     //check  if the form exists
    //     const test=!_.isEmpty(wrapper.getByText('Subject'));


    //     expect(test).toBe(true);
    // });

    // it('should submit', () => {
    //     const st = clone(mdata.store.post);
    //     const wrapper = mount2(st);

    //     // fireEvent.click(wrapper.getByText("Submit")).then(()=>{
    //     //     console.log('hmmm');
    //     // });

    //     expect(true).toBeFalsy();
        
    // });
    
});




// test("should submit", async () => {
//     const wrapper = mount2(clone(mdata.store.post), 2);

//     // console.log('********************');
//     // console.log('***', wrapper);
//     // console.log('********************');

//     ///const submit= wrapper.querySelector("input[type='submit']");

//     await act(async () => {
//         fireEvent.click(wrapper.getByText("Submit"));
//     });

//     expect(false).toBeTruthy();

// })



// import React from 'react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
// import { history } from '../../helpers';
// import config from '../../config';
// import { mount } from 'enzyme';
// import { render, act, fireEvent,  cleanup } from "@testing-library/react";

// import { mockTodo as mdata } from '../../store/mock';
// import { mhttp, createMockStore,mstore } from '../../store/mockstore';
// import Todo from './todo';
// import {clone} from '../../helpers';

// /* 
//     since saga is used for loading the data, need to mock the store
// */

// const url = `${config.api}/todo`;


// //mocking router history for selecting items
// mhttp.onGet(url).reply(200, mdata.response.todo);
// mhttp.onPost(url).reply(200,mdata.response.todo);

// const mHistory = history;
// mHistory.push = jest.fn();  //just a function stub to prevent things from blowing up.
// const mockCallBack = jest.fn();

// //doing this to inkect different results into the store

// const mockState= ()=> clone(mdata.store.post);

// const mountComponent = (store, id=0) => {
//     const mstore = createMockStore(store);

//     //https://stackoverflow.com/questions/48895514/how-do-you-test-router-match-params-with-jest-and-enzyme

//     return mount(
//         <Provider store={mstore}>
//             <Router history={mHistory}>
//                 <Todo 
//                     match={{params: {id}, isExact: true, path: "", url: ""}}                
//                 />
//             </Router>
//         </Provider>
//     )
// }

// describe('Todo Component', () => {
//     describe('init', () => {
//         it('should display no data', () => {
//             const st= clone(mdata.store.post)
//             delete st.todo;
//             const wrapper = mountComponent(st);

//             expect (wrapper.find('#noItem').length).toEqual(1);
//             expect(wrapper.find(Todo).length).toEqual(1);
//         });
//     });

//     describe('Todo Data Handling', () => {
//         // let wrapper = null;
//         // beforeEach(()=>{
//         //     wrapper = mountComponent((mdata.store.post, 2));
//         // })

//         afterEach(()=>{
//             jest.clearAllMocks();
//             cleanup;
//         })

//         it('should display data ', () => {
//             const wrapper = mountComponent(mdata.store.post,2);

//             expect (wrapper.find('#hasItem').length).toEqual(1);
//         });

//         it ('should submit data', ()=>{
//             const wrapper = mountComponent(mdata.store.post,2);

//             const btn= wrapper.find('#btnSubmit').at(1).simulate('click');
//             btn.getDOMNode().simulate('click');//.dispatchEvent(new Event ('click'));

//             //fireEvent.click(btn,0);


//             console.log('********************');
//             console.log('**', mockCallBack.mock);
//             console.log('********************');

//             expect (mockCallBack.mock.call.length).toEqual(1);
//         })

//         //TODO: write tests to check validation
//         //testing react-hook-form
//         //  https://medium.com/@BhargavThakrar/testing-react-component-that-uses-react-hook-form-ad0162d440e
//         // describe("Todo form validation", () => {
//         //     afterEach(()=>{
//         //         jest.clearAllMocks();
//         //         cleanup;
//         //     })

//         //     it('should warn if subject is empty', () => {
//         //         const state = clone(mdata.store.post);
//         //         //state.todo.subject = '';
//         //         const wrapper = mountComponent(state,2);
//         //     });





//         // });






//     });
// });


