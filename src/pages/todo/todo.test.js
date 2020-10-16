import React from "react";
import { fireEvent, getByText, render as rtlRender, screen, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

import { Router } from "react-router-dom";
import Todo from './todo';
import { clone } from '../../helpers';
import { act } from "react-dom/test-utils";
import { history } from '../../helpers';
import { mockTodo as mdata } from '../../store/mock';
import { nock, createMockStore, mstorePromise as mstore } from '../../store/mockstore';
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
// mhttp.onGet(url).reply(200, mdata.response.todo);
// mhttp.onPost(url).reply(200,mdata.response.todo);


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
        const test = !_.isEmpty(wrapper.getByText('...'));

        expect(test).toBe(true);
    })

    it('should open form when data exists', async done => {
        const st = clone(mdata.store.post);

        const wrapper = mount2(st, 2);

        //check  if the form exists
        const test = !_.isEmpty(wrapper.getByText('Subject'));

        expect(test).toBe(true);
        done();
    })

    it('should validate the form', async () => {
        const st = clone(mdata.store.post);
        const wrapper = mount2(st, 2);

        const { container, getByText } = wrapper;

        /*
            https://github.com/react-hook-form/react-hook-form/issues/532
                MauriceOppenberger commented on Jul 8 • 

            queryselector cheat sheet (scroll down)
            https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors
        */
        const subject = container.querySelector('#subject');
        const submit = container.querySelector('#btnSubmit');

        //const subject = wrapper.getByText('subject');

        await act(async () => {
            await fireEvent.change(subject, { target: { value: '' } });
            await fireEvent.change(container.querySelector('#body'), { target: { value: '' } });
        });

        await act(async () => {
            fireEvent.click(submit);
        });

        expect(getByText(/Please provide a subject/i)).toBeInTheDocument();
        expect(getByText(/please provide the message body/i)).toBeInTheDocument();
    })
})
