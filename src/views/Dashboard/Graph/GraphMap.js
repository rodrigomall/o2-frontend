import React from 'react';
import { Chart } from "react-google-charts";

const GraphMap = () => {

  const data = [
     ["Country", "Oxigeno"],
     ["Amazonas", 150],
     ["Ancash", 234],
     ["Apurímac", 123],
     ["Arequipa", 234],
     ["Ayacucho", 3],
     ["Cajamarca", 234],
     ["Callao", 234],
     ["Cusco", 56],
     ["Huánuco", 466],
     ["Huancavelica", 234],
     ["Ica", 234],
     ["Junín", 234],
     ["La Libertad", 234],
     ["Lambayeque", 234],
     ["Lima", 34]
  ]
  

  return (
    <Chart
      width={'800px'}
      height={'500px'}
      chartType="GeoChart"
      data={data}
      options={{
        region: 'PE',
        resolution: "provinces"
      }}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

export default GraphMap;
