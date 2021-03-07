import React from 'react';
import { Card, Row, Col } from 'reactstrap';

const GridHeader = () => {
  return (
    <Card className='py-1'>
      <Row>
        <Col xs={3}>
          Lugar
        </Col>
        <Col>
          Cantidad de Oxígeno Total (m3)
        </Col>
        <Col>
          Cantidad de Oxígeno Consumido (m3)
        </Col>
        <Col>
          Cantidad de Oxígeno Disponible (m3)
        </Col>
      </Row>
    </Card>
  )
}

export default GridHeader;
