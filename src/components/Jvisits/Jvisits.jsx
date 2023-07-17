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








// ! overall 2020-2023 line and pie 
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

function Jvisits() {
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

    const overallData = chartData.filter(item => item.year >= 2020 && item.year <= 2023);

    overallData.sort((a, b) => a.year - b.year); // Sort the data in ascending order based on the year

    const option1 = {
      backgroundColor: 'transparent',
      title: {
        text: 'Overall Patient Visits - 2020 to 2023',
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
            
          dataZoom: {
            yAxisIndex: 'none',
            textStyle: {
                color: 'white',
              },
          },
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
        text: 'Overall Patient Visits - 2020 to 2023',
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



//! quarterly 
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

//     const quarters = ['Q_1', 'Q_2', 'Q_3', 'Q_4'];

//     const option = {
//       backgroundColor: 'transparent',
//       title: {
//         text: 'Quarterly Patient Visits - 2023',
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
//         data: quarters,
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
//           name: 'Quarterly Patient Visits',
//           type: 'line',
//           areaStyle: {},
//           data: quarters.map((quarter) => {
//             const quarterData = chartData.find((item) => item.year === 2023);
//             return quarterData ? quarterData[quarter.toLowerCase()] : 0;
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








//! weekly for 2023
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

//     const weeks = Array.from({ length: 52 }, (_, index) => index + 1); // Generate an array of weeks from 1 to 52

//     const option = {
//       backgroundColor: 'transparent',
//       title: {
//         text: 'Weekly Patient Visits - 2023',
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
//         data: weeks,
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
//           name: 'Weekly Patient Visits',
//           type: 'line',
//           areaStyle: {},
//           data: weeks.map((week) => {
//             const weekData = chartData.find((item) => item.year === 2023);
//             return weekData ? weekData[`week_${week}`] : 0;
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





//! annual area 
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

//     const years = Array.from({ length: 12 }, (_, index) => 2020 + index); // Generate an array of years from 2020 to 2031
//     const totalVisits = chartData.map((item) => item.year_total);

//     const option = {
//       backgroundColor: 'transparent',
//       title: {
//         text: 'Annual Patient Visits',
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
//         data: years,
//         axisLabel: {
//           color: 'white',
//         },
//       },
//       yAxis: {},
//       series: [
//         {
//           type: 'line',
//           areaStyle: {
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               { offset: 0, color: '#00FFFF' },
//               { offset: 1, color: '#00FF00' },
//             ]),
//           },
//           data: totalVisits,
//           itemStyle: {
//             color: '#5AD8A6',
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





//  TODO PROBABLY GOING TO ERASE THESE 
//! pictorial bar older
// import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';

// function Jvisits() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     console.log('Fetching patient visits data...');
//     const data = [
//       { count: 15, type: 'Routine Check-up' },
//       { count: 10, type: 'Specialist Appointment' },
//       { count: 5, type: 'Emergency Visit' },
//     ];

//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom, 'dark');

//     const option = {
//       color: ['#bb0004', '#FFD48A'],
//       legend: {
//         data: ['Patient Visits', 'Reference'],
//       },
//       xAxis: {
//         data: data.map((visit) => visit.type),
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           interval: 0,
//         },
//       },
//       yAxis: {
//         splitLine: {
//           show: false,
//         },
//       },
//       series: [
//         {
//           type: 'pictorialBar',
//           name: 'Patient Visits',
//           symbol: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z',
//           symbolSize: [50, 120],
//           z: 10,
//           data: data.map((visit) => ({
//             value: visit.count,
//             symbolPosition: 'start',
//           })),
//         },
//         {
//           type: 'bar',
//           name: 'Reference',
//           barGap: '-100%',
//           data: data.map((visit) => visit.count),
//         },
//       ],
//     };

//     option && myChart.setOption(option);
//   }, []);

//   return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
// }

// export default Jvisits;





//! funnel chart 
// import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';

// function Jvisits() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     console.log('Fetching patient visits data...');
//     const data = [
//       { count: 15, type: 'Routine Check-up' },
//       { count: 10, type: 'Specialist Appointment' },
//       { count: 5, type: 'Emergency Visit' },
//     ];

//     // Prepare the chart data from the fetched patient visits data
//     const chartData = data.map((visit) => ({
//       value: visit.count,
//       name: visit.type,
//     }));

//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom, 'dark');

//     const option = {
//       title: {
//         text: 'Patient visits',
//         top: '5%', // Adjust the top position as needed
//         left: 'center',
//         textStyle: {
//           fontWeight: 'bold',
//           fontSize: 18,
//         },
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b} : {c}%',
//       },
//       toolbox: {
//         feature: {
//           dataView: { readOnly: false },
//           restore: {},
//           saveAsImage: {},
//         },
//       },
//       legend: {
//         top: 'bottom', // Adjust the top position as needed
//         left: 'center',
//         data: chartData.map((visit) => visit.name),
//       },
//       series: [
//         {
//           name: 'Funnel',
//           type: 'funnel',
//           left: '10%',
//           top: '20%', // Adjust the top position as needed
//           bottom: '20%', // Adjust the bottom position as needed
//           width: '80%',
//           min: 0,
//           max: Math.max(...chartData.map((visit) => visit.value)),
//           minSize: '0%',
//           maxSize: '100%',
//           sort: 'descending',
//           gap: 2,
//           label: {
//             show: true,
//             position: 'inside',
//           },
//           labelLine: {
//             length: 10,
//             lineStyle: {
//               width: 1,
//               type: 'solid',
//             },
//           },
//           itemStyle: {
//             borderColor: '#fff',
//             borderWidth: 1,
//           },
//           emphasis: {
//             label: {
//               fontSize: 20,
//             },
//           },
//           data: chartData,
//         },
//       ],
//     };

//     option && myChart.setOption(option);
//   }, []);

//   return <div className="chartContainer" ref={chartRef} style={{ height: '400px' }} />;
// }

// export default Jvisits;



