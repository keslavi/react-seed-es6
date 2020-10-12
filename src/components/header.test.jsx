import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header'; //grabbing the unconnected component
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

//safety check of app menu array
import { menu } from '../App';

describe('Header', () => {
    //since I'm not modifying the props I can put one wrapper at top
    const wrapper = shallow(<Header menu={menu} />);

    it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
    })

    describe('menu display', () => {
        //breaking my usual pass test patterns
        //took a lot of dithering around with console.log to make this final clean test

        it('should have all menu items', () => {
            const links = wrapper.find(Link);

            //doing this way because other iterators create callback issues
            for (var item of menu) {
                expect(links.contains(item.text)).toBe(true);
            }
        });
    });
})
