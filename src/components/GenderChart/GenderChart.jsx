//GenderChart.jsx
// ! graph 1
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import * as echarts from 'echarts';
import axios from 'axios';

function Jgender() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/gender');
        const data = response.data;
        setChartData(data);
        console.log('data', response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: 'Gender Distribution',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc',
        }
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
        data: ['Male', 'Female'],
        axisLabel: {
          color: 'white'
        }
      },
      yAxis: {
      
      },
      series: [
        {
          type: 'bar',
          data: chartData.map((item) => ({
            name: item.gender,
            value: item.count,
          })),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FFD700' },
              { offset: 0.5, color: '#00FF00' },
              { offset: 1, color: '#FFD700' },
            ]),
          },
        },
      ],
    };

    myChart.setOption(option);

    // Cleanup
    return () => {
      myChart.dispose();
    };
  }, [chartData]);

  return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
}

export default Jgender;
// ! end 1
