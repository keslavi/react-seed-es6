import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './home';

describe ('Home Component', () => {
    const wrapper = shallow(<Home/>);
    it ('should exist', ()=>{
        expect (wrapper.exists()).toBe(true);
    })
})