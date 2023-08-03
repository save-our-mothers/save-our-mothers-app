//! quarterly 
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

    const quarters = ['Q_1', 'Q_2', 'Q_3', 'Q_4'];

    const option = {
      backgroundColor: 'transparent',
      title: {
        text: 'Quarterly Patient Visits - 2023',
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
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        data: quarters,
        axisLabel: {
          color: 'white',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Quarterly Patient Visits',
          type: 'line',
          areaStyle: {},
          data: quarters.map((quarter) => {
            const quarterData = chartData.find((item) => item.year === 2023);
            return quarterData ? quarterData[quarter.toLowerCase()] : 0;
          }),
          
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 255, 255, 0.7)' },
              { offset: 1, color: 'rgba(0, 255, 0, 0.7)' },
            ]),
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