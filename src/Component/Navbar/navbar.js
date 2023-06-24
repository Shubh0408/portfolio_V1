import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function NavigationBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" >
        <NavbarBrand href="/" className="me-auto mx-8 text-3xl">
        𝕾𝖍𝖚𝖇𝖍
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <NavLink href="/components/">Home</NavLink>
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