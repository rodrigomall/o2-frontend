import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Col } from 'reactstrap';
const imgCovid = 'https://storage.googleapis.com/opencovid-peru-static/home/img/virus_icon.svg';



const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [time, seTime] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  const goHome = () => {
    history.push(`/home`);
  };

  setInterval(() => { 
    const today = new Date();
    const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    seTime(currentTime)
  }, 1000);

  return (
    <div>
      <Navbar color='black' light expand="md" className='clickable'>
        <Col onClick={goHome} xs={1} className='px-0'>
          <img src={imgCovid} alt='covid' width='50px' />
        </Col>
        <Col onClick={goHome} className='text-white py-2 text-left font-weight-bold'>
          Open Covid Peru
        </Col>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Col>
          </Col>
          <Col className='text-right text-white font-weight-bold'>
            {time}
          </Col>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
