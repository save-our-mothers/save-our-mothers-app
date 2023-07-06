//Jmap.jsx

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as echarts from 'echarts';

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

    const option = {
      // Your chart configuration options here
      // Example options:
      title: {
        text: 'Location Data',
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

  return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
}

export default Jmap;
