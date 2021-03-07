import React, { useContext } from 'react';
import { Container } from 'reactstrap';
import { DashboardContext } from '../../../context/DashboardContext';
import GridDetail from './GridDetail';
import GridHeader from './GridHeader';

const Grid = (props) => {
  const { detailList } = props;
  const searchContext = useContext(DashboardContext);

  const propsDetail = {
    detailList,
    searchContext
  }


  return (
    <Container fluid className='px-5'>
      <GridHeader />
      <GridDetail {...propsDetail} />
    </Container>
    
  )
}

export default Grid;
