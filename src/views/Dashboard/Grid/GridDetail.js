import React from 'react';
import { Card, Row, Col } from 'reactstrap';

const GridDetail = (props) => {
  const { detailList } = props;

  const arrayDetail = detailList.map((d, i) => (
    <Card key={i} className='pb-2'>
      <Row className='text-uppercase font-size-14 bg-gray px-2'>
        <Col xs={3} className='text-left pl-4'>
          {d.name}
        </Col>
        <Col>
          {d.value1}
        </Col>
        <Col>
          {d.value2}
        </Col>
        <Col>
          {d.value3}
        </Col>
      </Row>
      { d.items.map((item, j)=> (
          <Row key={j}>
            <Col xs={3} className='text-left pl-4'>
              {item.name}
            </Col>
            <Col>
              {item.value1}
            </Col>
            <Col>
              {item.value2}
            </Col>
            <Col>
              {item.value3}
            </Col>
        </Row>
        ))
      }
    </Card>
  ));

  return (
    <>
      {arrayDetail}
    </>
  )
}

export default GridDetail;
