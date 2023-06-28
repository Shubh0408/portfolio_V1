import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function NavigationBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='bg-teal-800' >
        <NavbarBrand href="/" className="me-auto mx-8 text-3xl text-white">
        𝕾𝖍𝖚𝖇𝖍
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 sm:hidden bg-white"  />
        <Nav navbar>
            <NavItem className='hidden sm:flex gap-4  decoration-transparent'>
            <NavLink className='text-white' href="/components/">Home</NavLink>
            <NavLink className='text-white' href="/components/">About</NavLink>
            <NavLink className='text-white' href="/components/">Contact</NavLink>
            <NavLink className='text-white' href="/components/">Social Links</NavLink>
            </NavItem>
            </Nav>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className='pl-9'>
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/components/">About</NavLink>
            <NavLink href="/components/">Contact</NavLink>
            <NavLink href="/components/">Social Links</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;