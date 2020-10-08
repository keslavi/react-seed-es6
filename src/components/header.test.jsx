import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './header';
import {Link} from 'reactstrap';

//safety check of app menu
import {menu} from '../App';

describe ('Header', () => {
    const wrapper = shallow(<Header menu={menu}/>);
    it ('should exist', ()=>{
        expect (wrapper.exists()).toBe(true);
    })

    describe('menu display', () => {
        it('should have home', () => {
            const link = wrapper.find (Link);

            console.log ('****', JSON.stringify(link, null,2));

            expect(true).toBe(false);
            
        });
        
    });

})