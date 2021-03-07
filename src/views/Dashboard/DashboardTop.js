import React from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';

const DashboardTop = (props) => {
 const { search, onChange, onClickSearch } = props;

  return (
    <Container fluid className='py-4'>
      <Row className='px-4'>
        <Col xs={8} />
        <Col className='text-right'>
          <Input onChange={onChange} value={search} className='shadow-none' placeholder='Ejemplo: Lima' />
        </Col>
       <Col xs={1} className='text-right'>
        <Button onClick={onClickSearch}>Buscar</Button>
       </Col>
      </Row>
      <Row className='py-3'>
        <Col className=''>
          <Row>
            <Col xs={12} className='font-size-30 py-2'>
              Oxígeno
            </Col>
            <Col>
              <Row>
                <Col xs={2} />
                <Col className='color-text'>
                  Disponible
                </Col>
                <Col className='color-text'>
                  Total
                </Col>
                <Col xs={2} />
              </Row>
              <Row>
                <Col xs={2} />
                <Col className='font-size-34 font-weight-bold'>
                  40
                </Col>
                <Col className='font-size-34 font-weight-bold'>
                  90
                </Col>
                <Col xs={2} />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
        <Row>
            <Col xs={12} className='font-size-30 py-2'>
              Camas UCI
            </Col>
            <Col>
              <Row>
                <Col xs={2} />
                <Col className='color-text'>
                  Disponible
                </Col>
                <Col className='color-text'>
                  Total
                </Col>
                <Col xs={2} />
              </Row>
              <Row>
                <Col xs={2} />
                <Col className='font-size-34 font-weight-bold'>
                  12
                </Col>
                <Col className='font-size-34 font-weight-bold'>
                  48
                </Col>
                <Col xs={2} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardTop;
