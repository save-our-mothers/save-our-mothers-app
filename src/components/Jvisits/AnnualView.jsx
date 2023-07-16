//! annual area 
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

function Jvisits({buttonValue}) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/patient-visits');
        const data = response.data;
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const years = Array.from({ length: 12 }, (_, index) => 2020 + index); // Generate an array of years from 2020 to 2031
    const totalVisits = chartData.map((item) => item.year_total);

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: 'Annual Patient Visits',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc',
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        data: years,
        axisLabel: {
          color: 'white',
        },
      },
      yAxis: {},
      series: [
        {
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#00FFFF' },
              { offset: 1, color: '#00FF00' },
            ]),
          },
          data: totalVisits,
          itemStyle: {
            color: '#5AD8A6',
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [chartData]);

  return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
}

export default Jvisits;
