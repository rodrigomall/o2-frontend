import React, { useState } from 'react';
import { Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
const imgCovid = 'https://storage.googleapis.com/opencovid-peru-static/home/img/virus_icon.svg';

const HomeHeader = (props) => {
  const { toggleModal } = props; 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onClickModal = () => {
    toggleModal()
  }

  return (
    <>
      <Navbar color="black" light expand="md" className='clickable' >
        <Col xs={1} className='px-0'>
          <img src={imgCovid} alt='covid' width='50px' />
        </Col>
        <Col xs={2} className='text-white text-left font-weight-bold'>
          OpenCovid-Peru
        </Col>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem color='white'>
              <NavLink color='white' href="#">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reportes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Nacional</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Regiones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Equipo</NavLink>
            </NavItem>
            <NavItem onClick={onClickModal}>
              <NavLink className='font-weight-bold'>Recomendaciones</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default HomeHeader
