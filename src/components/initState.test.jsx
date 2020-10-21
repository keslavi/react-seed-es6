
import React from 'react';
import { Provider } from 'react-redux';
import config from '../config';
import { mount } from 'enzyme';

import { mockTodo as mdata } from '../store/mock';
import { createMockStore } from '../store/mockstore';
import InitState from './initState';

const url = `${config.api}/todo`;

const mountComponent = (store) => {
    const mstore = createMockStore(store);
    return mount(
        <Provider store={mstore}>
            <InitState />
        </Provider>
    )
}

describe('InitState Component', () => {
    describe('init', () => {
        it('should display no data', () => {
            const wrapper = mountComponent(mdata.store.init);

            expect (wrapper.find('#initializeStore').length).toEqual(1);
            expect(wrapper.find(InitState).length).toEqual(1);
        });

        it('should display data', () => {
            const wrapper = mountComponent((mdata.store.post));            
            expect(wrapper.find("#storeInitialized").length).toEqual(1);
        });
    });
});


