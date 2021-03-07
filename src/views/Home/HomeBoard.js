import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import doctors from '../../assets/images/doctors.png'; 


const HomeBoard = () => {
  const history = useHistory();

  const goToDashboard = () => {
    history.push(`/dashboard`);
  };

  return (
  <Container>
    <Row>
      <Col xs={3} />
      <Col className='font-size-24'>
        <Col className='text-white font-weight-bold border-primary-25 py-2'>
          Estamos contigo para Ayudarte
        </Col>
      </Col>
      <Col xs={3} />
    </Row>
    <Row className='pt-5'>
      <Col className='mt-5 pt-5'>
        <Row className='mt-5 py-5'>
          <Col/>
          <Col xs={5} className='text-white font-weight-bold border-primary-25 py-2'>
            Buscar lo que necesitas
          </Col>
          <Col/>
        </Row>
        <Row  className='py-3'>
          <Col>
            <Col onClick={goToDashboard} className='clickable font-weight-bold border-secondary-25 py-2'>
              Oxigeno
            </Col>
          </Col>
          <Col onClick={goToDashboard} className='clickable font-weight-bold border-secondary-25 py-2'>
            Camas UCI
          </Col>
        </Row>
      </Col>
      <Col className='pt-5'>
        <img src={doctors} alt='doctors' width='90%' />
      </Col>
    </Row>
  </Container>
  )
}

export default HomeBoard;
