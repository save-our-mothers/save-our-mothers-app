//Jmap.jsx

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as echarts from 'echarts';
import Somalia from '../Nav/Logos/Somalia.gif';

function Jmap() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.chartReducers.locations);

  useEffect(() => {
    console.log('Fetching locations...');
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, [dispatch]);

  useEffect(() => {
    console.log('Locations:', locations);
    // Call the function to render the chart with the retrieved data
    renderChart(locations);
  }, [locations]);

  const chartRef = useRef(null);

  const renderChart = (data) => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const colorPalette = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'];

    const option = {
      color: colorPalette,
      title: {
        text: 'Location Data',
        textStyle: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: { readOnly: false },
          restore: {},
          magicType: { type: ['line', 'bar'] },
          restore: {},
        },
      },
      xAxis: {
        type: 'category',
        data: data.map((location) => location.neighborhood),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Count',
          type: 'bar',
          data: data.map((location) => location.count),
        },
      ],
    };

    myChart.setOption(option);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', width: '50%' }}>
        <img className="locmap" src={Somalia} alt="Somalia" style={{ width: '100%' }} />
      </div>
      <div style={{ flex: '1', width: '50%' }}>
        <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />
      </div>
    </div>
  );
}

export default Jmap;





// import React, { useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as echarts from 'echarts';
// import Somalia from '../Nav/Logos/Somalia.gif'


// function Jmap() {
//   const dispatch = useDispatch();
//   const locations = useSelector((state) => state.chartReducers.locations);

//   useEffect(() => {
//     console.log('Fetching locations...');
//     dispatch({ type: 'FETCH_LOCATIONS' });
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Locations:', locations);
//     // Call the function to render the chart with the retrieved data
//     renderChart(locations);
//   }, [locations]);

//   const chartRef = useRef(null);

//   const renderChart = (data) => {
//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const option = {
//       // Your chart configuration options here
//       // Example options:
//       title: {
//         text: 'Location Data',
//       },
//       xAxis: {
//         type: 'category',
//         data: data.map((location) => location.neighborhood),
//       },
//       yAxis: {
//         type: 'value',
//       },
//       series: [
//         {
//           name: 'Count',
//           type: 'bar',
//           data: data.map((location) => location.count),
//         },
//       ],
//     };

//     myChart.setOption(option);
//   };

//   return  <div style={{ display: 'flex' }}>
//   <div style={{ flex: '1', width: '50%' }}>
//     <img className="locmap" src={Somalia} alt="Somalia" style={{ width: '100%' }} />
//   </div>
//   <div style={{ flex: '1', width: '50%' }}>
//     <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />
//   </div>
// </div>
// }

// export default Jmap;
