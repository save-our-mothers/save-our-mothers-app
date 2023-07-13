// Junique.jsx
//npm install echarts@latest


import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';

function Junique() {
  const chartRef3 = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/gender'); 
        const data = response.data;
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const chartDom3 = chartRef3.current;

    const myChart3 = echarts.init(chartDom3);

    const option3 = {
      color: ['#FF6457', '#5AD8A6', '#FFBB47'],
      legend: {
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'item',
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          type: 'pie',
          name: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          label: {
            formatter: '{b}: {d}%',
          },
          data: chartData.map((item) => ({
            name: item.gender,
            value: item.count,
          })),
        },
      ],
    };


    myChart3.setOption(option3);


    return () => {

      myChart3.dispose();
    };
  }, [chartData]);

  return (
    <div >
      <div className="chartContainer" ref={chartRef3} style={{ height: '200px'}} />
    </div>
  );
}

export default Junique;

//! weekly 
// import React, { useEffect, useRef, useState } from 'react';
// import * as echarts from 'echarts';
// import axios from 'axios';

// function Junique() {
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

//     const weekData = [];
//     for (let i = 1; i <= 52; i++) {
//       weekData.push(`week_${i}`);
//     }

//     const seriesData = [
//       {
//         name: 'Prenatal Visit',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {},
//         data: weekData.map((week) => chartData[0]?.[week]),
//       },
//       {
//         name: 'Routine Check-up',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {},
//         data: weekData.map((week) => chartData[1]?.[week]),
//       },
//       {
//         name: 'Emergency Visit',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {},
//         data: weekData.map((week) => chartData[2]?.[week]),
//       },
//       {
//         name: 'Specialist Appointment',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {},
//         data: weekData.map((week) => chartData[3]?.[week]),
//       },
//     ];

//     const options = {
//       color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//       title: {
//         text: 'Weekly',
//         textStyle: {
//           color: '#fff',
//         },
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'cross',
//           label: {
//             backgroundColor: '#6a7985',
//           },
//         },
//       },
//       legend: {
//         top: 'bottom',
//         bottom: 0,
//         textStyle: {
//           color: '#fff',
//         },
//       },
//       toolbox: {
//         show: true,
//         orient: 'horizontal',
//         top: 10,
//         right: 10,
//         feature: {
//           dataZoom: {
//             yAxisIndex: 'none',
//           },
//           dataView: { readOnly: false },
//           magicType: { type: ['line', 'bar'] },
//           restore: {},
//           saveAsImage: {},
//         },
//         iconStyle: {
//           normal: {
//             color: '#fff',
//           },
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '8%',
//         top: '20%',
//         containLabel: true,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           boundaryGap: false,
//           data: weekData,
//           axisLabel: {
//             color: '#fff',
//           },
//         },
//       ],
//       yAxis: [
//         {
//           type: 'value',
//           axisLabel: {
//             color: '#fff',
//           },
//         },
//       ],
//       series: seriesData,
//     };

//     myChart.setOption(options);

//     return () => {
//       myChart.dispose();
//     };
//   }, [chartData]);

//   return (
//     <div className="chartContainer" style={{ width: '100vw' }}>
//       <div className="chart" ref={chartRef} style={{ height: '450px', width: '300vw' }} />
//       <div className="legend" />
//     </div>
//   );
// }

// export default Junique;





//!Monthly
// import React, { useEffect, useRef, useState } from 'react';
// import * as echarts from 'echarts';
// import axios from 'axios';

// function Junique() {
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

//     const options = {
//       color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//       title: {
//         text: 'Monthly',
//         textStyle: {
//           color: '#fff',
//         },
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'cross',
//           label: {
//             backgroundColor: '#6a7985',
//           },
//         },
//       },
//       legend: {
//         top: 'bottom',
//         bottom: 0,
//         textStyle: {
//           color: '#fff',
//         },
//       },
//       toolbox: {
//         show: true,
//         orient: 'horizontal',
//         top: 10,
//         right: 10,
//         feature: {
//           dataZoom: {
//             yAxisIndex: 'none',
//           },
//           dataView: { readOnly: false },
//           magicType: { type: ['line', 'bar'] },
//           restore: {},
//           saveAsImage: {},
//         },
//         iconStyle: {
//           normal: {
//             color: '#fff',
//           },
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '8%',
//         top: '20%',
//         containLabel: true,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           boundaryGap: false,
//           data: [
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Jul',
//             'Aug',
//             'Sep',
//             'Oct',
//             'Nov',
//             'Dec',
//           ],
//           axisLabel: {
//             color: '#fff',
//           },
//         },
//       ],
//       yAxis: [
//         {
//           type: 'value',
//           axisLabel: {
//             color: '#fff',
//           },
//         },
//       ],
//       series: [
//         {
//           name: 'Prenatal visit',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [
//             chartData[0]?.month_1,
//             chartData[0]?.month_2,
//             chartData[0]?.month_3,
//             chartData[0]?.month_4,
//             chartData[0]?.month_5,
//             chartData[0]?.month_6,
//             chartData[0]?.month_7,
//             chartData[0]?.month_8,
//             chartData[0]?.month_9,
//             chartData[0]?.month_10,
//             chartData[0]?.month_11,
//             chartData[0]?.month_12,
//           ],
//         },
//         {
//           name: 'Routine Check-up',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [
//             chartData[1]?.month_1,
//             chartData[1]?.month_2,
//             chartData[1]?.month_3,
//             chartData[1]?.month_4,
//             chartData[1]?.month_5,
//             chartData[1]?.month_6,
//             chartData[1]?.month_7,
//             chartData[1]?.month_8,
//             chartData[1]?.month_9,
//             chartData[1]?.month_10,
//             chartData[1]?.month_11,
//             chartData[1]?.month_12,
//           ],
//         },
//         {
//           name: 'Emergency Visit',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [
//             chartData[2]?.month_1,
//             chartData[2]?.month_2,
//             chartData[2]?.month_3,
//             chartData[2]?.month_4,
//             chartData[2]?.month_5,
//             chartData[2]?.month_6,
//             chartData[2]?.month_7,
//             chartData[2]?.month_8,
//             chartData[2]?.month_9,
//             chartData[2]?.month_10,
//             chartData[2]?.month_11,
//             chartData[2]?.month_12,
//           ],
//         },
//         {
//           name: 'Specialist Appointment',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [
//             chartData[3]?.month_1,
//             chartData[3]?.month_2,
//             chartData[3]?.month_3,
//             chartData[3]?.month_4,
//             chartData[3]?.month_5,
//             chartData[3]?.month_6,
//             chartData[3]?.month_7,
//             chartData[3]?.month_8,
//             chartData[3]?.month_9,
//             chartData[3]?.month_10,
//             chartData[3]?.month_11,
//             chartData[3]?.month_12,
//           ],
//         },
//       ],
//     };

//     myChart.setOption(options);

//     return () => {
//       myChart.dispose();
//     };
//   }, [chartData]);

//   return (
//     <div className="chartContainer" style={{ width: '100vw' }}>
//     <div className="chart" ref={chartRef} style={{ height: '450px', width: '300vw' }} />
//     <div className="legend" />
//     </div>
//   );
// }

// export default Junique;












//! quarterly
// import React, { useEffect, useRef, useState } from 'react';
// import * as echarts from 'echarts';
// import axios from 'axios';

// function Junique() {
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

//     const options = {
//       color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//       title: {
//         text: 'Patient Visits',
//         textStyle: {
//           color: '#fff', // Set title text color to white
//         },
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'cross',
//           label: {
//             backgroundColor: '#6a7985',
//           },
//         },
//       },
//       legend: {
//         top: 'bottom',
//         bottom: 0, // Adjust the bottom spacing of the legend
//         textStyle: {
//           color: '#fff', // Set legend text color to white
//         },
//       },
//       toolbox: {
//         show: true,
//         orient: 'horizontal',
//         top: 10,
//         right: 10,
//         feature: {
//           dataZoom: {
//             yAxisIndex: 'none',
//           },
//           dataView: { readOnly: false },
//           magicType: { type: ['line', 'bar'] },
//           restore: {},
//           saveAsImage: {},
//         },
//         iconStyle: {
//           normal: {
//             color: '#fff', // Set toolbox item color to white
//           },
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '8%',
//         top: '20%',
//         containLabel: true,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           boundaryGap: false,
//           data: ['Q1', 'Q2', 'Q3', 'Q4'], // Quarterly data
//           axisLabel: {
//             color: '#fff', // Set xAxis label color to white
//           },
//         },
//       ],
//       yAxis: [
//         {
//           type: 'value',
//           axisLabel: {
//             color: '#fff', // Set yAxis label color to white
//           },
//         },
//       ],
//       series: [
//         {
//           name: 'Prenatal visit',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [20, 17, 38, 30], // Quarterly data for Prenatal visit
//         },
//         {
//           name: 'Routine Check-up',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [10, 8, 7, 9], // Quarterly data for Routine Check-up
//         },
//         {
//           name: 'Emergency Visit',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [3, 7, 10, 0], // Quarterly data for Emergency Visit
//         },
//         {
//           name: 'Specialist Appointment',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {},
//           data: [15, 21, 32, 0], // Quarterly data for Specialist Appointment
//         },
//       ],
//     };

//     myChart.setOption(options);

//     return () => {
//       myChart.dispose();
//     };
//   }, []);

//   return (
//     <div className="chartContainer">
//       <div className="chart" ref={chartRef} style={{ height: '200px' }} />
//       <div className="legend" />
//     </div>
//   );
// }

// export default Junique;


//! all three with legends and toolbox
// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import * as echarts from 'echarts';
// import axios from 'axios';

// function Junique() {
//   const chartRef1 = useRef(null);
//   const chartRef2 = useRef(null);
//   const chartRef3 = useRef(null);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/gender'); // Replace with your API endpoint
//         const data = response.data;
//         setChartData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const chartDom1 = chartRef1.current;
//     const chartDom2 = chartRef2.current;
//     const chartDom3 = chartRef3.current;
//     const myChart1 = echarts.init(chartDom1);
//     const myChart2 = echarts.init(chartDom2);
//     const myChart3 = echarts.init(chartDom3);

//     const option1 = {
//       color: ['#007bff', '#ffd700'],
//       legend: {},
//       tooltip: {
//         trigger: 'axis',
//       },
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
//         data: chartData.map((item) => item.gender),
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           interval: 0,
//         },
//       },
//       yAxis: {
//         max: 80,
//         splitLine: { show: false },
//       },
//       series: [
//         {
//           type: 'pictorialBar',
//           name: 'pictorial element',
//           symbol: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z',
//           symbolSize: [50, 120],
//           z: 10,
//           data: chartData.map((item) => ({
//             value: item.count,
//             symbolPosition: 'start',
//           })),
//         },
//         {
//           type: 'bar',
//           name: 'reference bar',
//           barGap: '-100%',
//           data: chartData.map((item) => item.count),
//         },
//       ],
//     };

//     const option2 = {
//       color: ['#ff0000', '#00ff00'],
//       legend: {},
//       tooltip: {
//         trigger: 'item',
//       },
//       toolbox: {
//         show: true,
//         feature: {
//           dataView: { readOnly: false },
//           restore: {},
//           saveAsImage: {},
//         },
//       },
//       series: [
//         {
//           type: 'funnel',
//           name: 'funnel',
//           sort: 'ascending',
//           gap: 10,
//           label: {
//             show: true,
//             position: 'inside',
//           },
//           data: chartData.map((item) => ({
//             value: item.count,
//             name: item.gender,
//           })),
//         },
//       ],
//     };

//     const option3 = {
//       color: ['#ff0000', '#00ff00'],
//       legend: {},
//       tooltip: {
//         trigger: 'item',
//       },
//       toolbox: {
//         show: true,
//         feature: {
//           dataView: { readOnly: false },
//           restore: {},
//           saveAsImage: {},
//         },
//       },
//       series: [
//         {
//           type: 'pie',
//           name: 'pie',
//           radius: '30%',
//           center: ['50%', '50%'],
//           label: {
//             formatter: '{b}: {d}%',
//           },
//           data: chartData.map((item) => ({
//             name: item.gender,
//             value: item.count,
//           })),
//         },
//       ],
//     };

//     myChart1.setOption(option1);
//     myChart2.setOption(option2);
//     myChart3.setOption(option3);

//     // Cleanup
//     return () => {
//       myChart1.dispose();
//       myChart2.dispose();
//       myChart3.dispose();
//     };
//   }, [chartData]);

//   return (
//     <div>
//       <div className="chartContainer" ref={chartRef1} style={{ height: '400px', marginBottom: '20px' }} />
//       <div className="chartContainer" ref={chartRef2} style={{ height: '400px', marginBottom: '20px' }} />
//       <div className="chartContainer" ref={chartRef3} style={{ height: '400px' }} />
//     </div>
//   );
// }

// export default Junique;

