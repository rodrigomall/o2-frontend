import React from 'react';
import { Row, Col,} from 'reactstrap';
import GraphOne from './Graph/GraphOne';
import GraphTwo from './Graph/GraphTwo';

const DashboardCard = () => {
  return (
    <Row className='px-5'>
      <Col>
        <GraphOne />
      </Col>
      <Col>
        <GraphTwo />
      </Col>
    </Row>
  )
}

export default DashboardCard;
