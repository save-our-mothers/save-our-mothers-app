// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import * as echarts from 'echarts';

// function Jvisits() {
//   const chartRef = useRef(null);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/patient-visits');
//         const data = response.data;
//         setChartData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const months = Array.from({ length: 12 }, (_, index) => index + 1); // Generate an array of months from 1 to 12

//     const option = {
//       backgroundColor: 'transparent',
//       title: {
//         text: 'Monthly Patient Visits - 2023',
//         left: 'center',
//         top: 20,
//         textStyle: {
//           color: '#ccc',
//         },
//       },
//       tooltip: {
//         trigger: 'axis',
//       },
//       legend: {},
//       toolbox: {
//         show: true,
//         feature: {
//           dataZoom: {
//             yAxisIndex: 'none',
//           },
//           dataView: { readOnly: false },
//           magicType: { type: ['line', 'bar'] },
//           restore: {},
//           saveAsImage: {},
//         },
//       },
//       xAxis: {
//         type: 'category',
//         data: months.map(month => `Month ${month}`),
//         axisLabel: {
//           color: 'white',
//         },
//       },
//       yAxis: {
//         type: 'value',
//         axisLabel: {
//           color: 'white',
//         },
//       },
//       series: [
//         {
//           name: 'Monthly Patient Visits',
//           type: 'bar',
//           data: months.map(month => {
//             const monthData = chartData.find(item => item.year === 2023);
//             return monthData ? monthData[`month_${month}`] : 0;
//           }),
//           itemStyle: {
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               { offset: 0, color: 'rgba(0, 255, 255, 0.7)' },
//               { offset: 1, color: 'rgba(0, 255, 0, 0.7)' },
//             ]),
//           },
//         },
//       ],
//     };

//     myChart.setOption(option);

//     return () => {
//       myChart.dispose();
//     };
//   }, [chartData]);

//   return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
// }

// export default Jvisits;








// ! overall 2020-2024 line and pie 
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

function Jvisits({buttonValue}) {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
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
    const chartDom1 = chartRef1.current;
    const myChart1 = echarts.init(chartDom1);

    const chartDom2 = chartRef2.current;
    const myChart2 = echarts.init(chartDom2);

    const overallData = chartData.filter(item => item.year >= 2020 && item.year <= 2031);

    overallData.sort((a, b) => a.year - b.year); // Sort the data in ascending order based on the year

    const option1 = {
      backgroundColor: 'transparent',
      title: {
        text: 'Overall Patient Visits - 2020 to 2024',
        left: 'center',
        top: 20,
        textStyle: {
          color: 'white',
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
          textStyle: {
            color: 'white',
          },
         magicType: { type: ['line', 'bar'] },
         textStyle: {
            color: 'white',
          },
         restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        data: overallData.map(item => item.year),
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
          name: 'Patient Visits',
          textStyle: {
            color: 'white',
          },
          type: 'line',
          data: overallData.map(item => item.year_total),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 255, 255, 0.7)' },
              { offset: 1, color: 'rgba(0, 255, 0, 0.7)' ,
              textStyle: {
                color: 'white',
              },
            },

            ]),
          },
        },
      ],
    };

    const option2 = {
      backgroundColor: 'transparent',
      title: {
        text: 'Overall Patient Visits - 2020 to 2024',
        left: 'center',
        top: 20,
        textStyle: {
          color: 'white',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
       
      },
      legend: {},
      toolbox: {
        show: true,
        textStyle: {
            color: 'white',
          },
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
          textStyle: {
            color: 'white', 
          },
        },
      },
      series: [
        {
          name: 'Patient Visits',
          type: 'pie',
          radius: '50%',
          data: overallData.map(item => ({
            name: item.year.toString(),
            value: item.year_total,
           
          })),
          itemStyle: {
            emphasis: {
              shadowBlur:0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0)',
              textStyle: {
                color: 'white', 
              },
            },
            label: {
                color: 'white', 
                textStyle: {
                    color: 'white',}
                }
          },
        },
      ],
    };

    myChart1.setOption(option1);
    myChart2.setOption(option2);

    return () => {
      myChart1.dispose();
      myChart2.dispose();
    };
  }, [chartData]);

  return (
    <div>
      <div className="chartContainer" ref={chartRef1} style={{ height: '300px' }} />
      <div className="chartContainer" ref={chartRef2} style={{ height: '300px' }} />
    </div>
  );
}

export default Jvisits;
