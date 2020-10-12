import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    // not used because it's making the page reload. use Link and apply the class manually
    //NavLink 
} from 'reactstrap';


import './style.css';

export const Header = (props) => {
    const { menu } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="navbar-brand">
                    <Link to="/" className='nav-link'>Seed</Link>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {renderMenu(menu)}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;

// ********************************************************************

const renderMenu = (items) => {
    return items.map(item => {
        return (
            <NavItem key={item.text}>
                <Link to={item.link} className="nav-link">
                    {item.text}
                </Link>
            </NavItem>
        )
    })
}
