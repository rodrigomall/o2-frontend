import React, {useState, useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import DashboardTop from './DashboardTop';
import DashboardCard from './DashboardCard';
import Grid from './Grid/Grid';
import GraphMap from './Graph/GraphMap';
import { DashboardContext } from '../../context/DashboardContext';
import dashboardApi from '../../api/dashboardApi'
import Header from '../Header/Header';

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [detailList, setDetailList] = useState([]);

  const getData = () => {
    dashboardApi.get(search).then(response => response.json())
    .then(json => console.log(json));
    setDetailList([
      {
        name: 'Amazonas',
        value1: 350,
        value2: 200,
        value3: 150,
        items : [{
          name: 'Hospital Regional Virgen de Fatima',
          value1: 100,
          value2: 70,
          value3: 30,
        },
        {
          name: 'Hospital 2 de Mayo',
          value1: 40,
          value2: 20,
          value3: 20,
        }
        ]
      },
      {
        name: 'Lima',
        value1: 234,
        value2: 200,
        value3: 34,
        items : [{
          name: 'Hospital Grau',
          value1: 100,
          value2: 2,
          value3: 20,
        }]
      }
    ])
  }
  

  useEffect(()=>{
    getData(search);
    // eslint-disable-next-line
  }, [])

  
 
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClickSearch = () => {
    getData(search);
  }

  const propsTop = {
    search,
    onChange,
    onClickSearch
  }
  const propsGrid = {
    detailList
  }

  return (
    <div className='bg-gray'>
      <DashboardContext.Provider value={{search}}>
        <Header />
        <DashboardTop {...propsTop} />
        <DashboardCard />
        <Row className='text-left p-4'>
        </Row>
        <Grid {...propsGrid} />
        <Row className='px-4'>
          <Col className='px-5 pt-4 text-center'>
            <GraphMap />
          </Col>
        </Row>
      </DashboardContext.Provider>
    </div>
  )
}

export default Dashboard;
