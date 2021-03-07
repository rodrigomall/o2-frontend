import React from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import cylinder from '../../assets/images/cylinder.png'; 
import concentrator from '../../assets/images/concentrator.png'; 

const HomeModal = (props) => {
  const { className, modal, toggleModal } = props;

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} className={className} size={'lg'}>
        <ModalHeader toggle={toggleModal}>Recomendaciones</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Col xs={12}>
                1. Recuerda que en Perú, el cilindro de 10 metros cúbicos está alrededor de los 6.000 soles (1.779 dólares) y recargas por 50 soles (15 dólares) el metro cúbico.
              </Col>
              <Col xs={12}>
                <img src={cylinder} alt='cylinder' width='90%' />
              </Col>
            </Col>
            <Col>
              <Col>
                2. Recuerda que en Perú, el concentrador de oxígeno de 10lt cuesta alrededor de los S/6500, el de de 8lt su precio aproximado es de S/4,100.
              </Col>
              <Col xs={12}>
                <img src={concentrator} alt='concentrator' width='80%' height='200px' />
              </Col>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  )
}

export default HomeModal;
