import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import resume from "../../Assets/Shubham_verma_Resume.pdf";

function NavigationBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='bg-gray-800' >
        <NavbarBrand href="/" className="me-auto mx-8 text-3xl text-white">
          𝕾𝖍𝖚𝖇𝖍
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-4 sm:hidden text-white border-white "><AcUnitIcon /></NavbarToggler>
        <Nav navbar>
          <NavItem className='hidden mr-5 sm:flex gap-4 decoration-transparent'>
            <NavLink className='text-white' href="/">Home</NavLink>
            <NavLink className='text-white' href="#skills">Skills</NavLink>
            <NavLink className='text-white' href="#feature">Features</NavLink>
            <NavLink className='text-white' href="#portfolio">Portfolio</NavLink>
            <NavLink className='text-white' href={resume} download="Shubham_Resume"><button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-2 text-lg rounded-lg hover:cursor-progress font-medium'>Resume</button></NavLink>
          </NavItem>
        </Nav>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className='text-white text-center' href="#">Home</NavLink>
              <NavLink className='text-white text-center' href="#skills">Skills</NavLink>
              <NavLink className='text-white text-center' href="#feature">Feature</NavLink>
              <NavLink className='text-white text-center' href="#portfolio">Portfolio</NavLink>
              <NavLink className='text-white text-center' href={resume} download="Shubham_Resume"><div className='bg-gradient-to-r from-cyan-500 to-blue-500 px-2 text-lg rounded-lg hover:cursor-progress font-medium text-center'>Download Resume</div></NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;