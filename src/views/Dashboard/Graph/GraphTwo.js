import React from 'react';
import { Card } from 'reactstrap';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const GraphTwo = () => {
  const options = {
    chart: {
      type: 'pie',
      height: '50%',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: 'Oxígeno',
      data: [
        ['Disponible', 12],
        ['Total', 48],
      ]
    }]
  }
  return (
    <Card>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Card>
  )
}

export default GraphTwo;