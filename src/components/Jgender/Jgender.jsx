//Jgender.jsx
// ! graph 1
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as echarts from 'echarts';

function Jgender() {
  const chartRef = useRef(null);

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
        data: ['Male', 'Female', 'Other'],
        axisLabel: {
          color: 'white'
        }
      },
      yAxis: {
        
      },
      series: [
        {
          type: 'bar',
          data: [10, 15, 5],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color:  '#FFD700'},
              { offset: 0.5, color:  '#00FF00'},
              { offset: 1, color: '#FFD700'},
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
  }, []);

  return <div className="chartContainer"ref={chartRef} style={{ height: '400px' }} />;
}

export default Jgender;
// ! end 1


// ! 3
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import * as echarts from 'echarts';

// function Jgender() {
//   const genderData = useSelector((state) => state.chartReducers.genderData);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!genderData) return;

//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const formattedData = genderData.map((data) => ({
//       value: data.count,
//       name: data.gender,
//       itemStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//           { offset: 0, color: data.gender === 'Male' ? '#00FF00' : data.gender === 'Female' ? '#0000FF' : '#FFD700' },
//           { offset: 1, color: data.gender === 'Male' ? '#008000' : data.gender === 'Female' ? '#00008B' : '#FFA500' }
//         ])
//       }
//     }));

//     const option = {
//       backgroundColor: '#2c343c',
//       title: [
//         {
//           text: 'Gender Distribution',
//           left: 'center',
//           top: '5%',
//           textStyle: {
//             color: '#ccc'
//           }
//         },
//         {
//           text: 'Gender Distribution - Bar Chart',
//           left: 'center',
//           top: '55%',
//           textStyle: {
//             color: '#ccc'
//           }
//         }
//       ],
//       grid: [
//         { top: '15%', width: '100%', height: '30%' },
//         { top: '65%', width: '100%', height: '30%' }
//       ],
//       tooltip: {},
//       xAxis: [
//         {
//           gridIndex: 0,
//           type: 'category',
//           data: ['Male', 'Female', 'Other']
//         },
//         {
//           gridIndex: 1,
//           type: 'category',
//           data: ['Male', 'Female', 'Other']
//         }
//       ],
//       yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
//       series: [
//         {
//           gridIndex: 0,
//           type: 'pie',
//           radius: '55%',
//           center: ['50%', '35%'],
//           data: formattedData,
//           roseType: 'radius',
//           label: {
//             color: 'rgba(255, 255, 255, 0.3)'
//           },
//           labelLine: {
//             lineStyle: {
//               color: 'rgba(255, 255, 255, 0.3)'
//             },
//             smooth: 0.2,
//             length: 10,
//             length2: 20
//           },
//           animationType: 'scale',
//           animationEasing: 'elasticOut',
//           animationDelay: function (idx) {
//             return Math.random() * 200;
//           }
//         },
//         {
//           gridIndex: 1,
//           type: 'bar',
//           data: [10, 15, 5],
//           itemStyle: {
//             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//               { offset: 0, color: '#00FF00' },
//               { offset: 0.5, color: '#0000FF' },
//               { offset: 1, color: '#FFD700' }
//             ])
//           }
//         }
//       ]
//     };

//     myChart.setOption(option);

//     // Cleanup
//     return () => {
//       myChart.dispose();
//     };
//   }, [genderData]);

//   return <div ref={chartRef} style={{ height: '800px' }} />;
// }

// export default Jgender;
// ! end 3

//! cool bar chart but on top of pie empty 4
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import * as echarts from 'echarts';

// function Jgender() {
//   const genderData = useSelector((state) => state.chartReducers.genderData);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!genderData) return;

//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const formattedData = genderData.map((data) => ({
//       value: data.count,
//       name: data.gender,
//       itemStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//           { offset: 0, color: data.gender === 'Male' ? '#00FF00' : data.gender === 'Female' ? '#0000FF' : '#FFD700' },
//           { offset: 1, color: data.gender === 'Male' ? '#008000' : data.gender === 'Female' ? '#00008B' : '#FFA500' }
//         ])
//       }
//     }));

//     const option = {
//       backgroundColor: '#2c343c',
//       title: [
//         {
//           text: 'Gender Distribution',
//           left: 'center',
//           top: 20,
//           textStyle: {
//             color: '#ccc'
//           }
//         },
//         {
//           text: 'Gender Distribution - Bar Chart',
//           left: 'center',
//           top: '55%',
//           textStyle: {
//             color: '#ccc'
//           }
//         }
//       ],
//       grid: [
//         { top: '30%', width: '50%', height: '40%' },
//         { top: '65%', width: '50%', height: '30%' }
//       ],
//       tooltip: {},
//       xAxis: [
//         {
//           gridIndex: 0,
//           type: 'category',
//           data: ['Male', 'Female', 'Other']
//         },
//         {
//           gridIndex: 1,
//           type: 'category',
//           data: ['Male', 'Female', 'Other']
//         }
//       ],
//       yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
//       series: [
//         {
//           gridIndex: 0,
//           type: 'pie',
//           radius: '55%',
//           center: ['50%', '50%'],
//           data: formattedData,
//           roseType: 'radius',
//           label: {
//             color: 'rgba(255, 255, 255, 0.3)'
//           },
//           labelLine: {
//             lineStyle: {
//               color: 'rgba(255, 255, 255, 0.3)'
//             },
//             smooth: 0.2,
//             length: 10,
//             length2: 20
//           },
//           animationType: 'scale',
//           animationEasing: 'elasticOut',
//           animationDelay: function (idx) {
//             return Math.random() * 200;
//           }
//         },
//         {
//           gridIndex: 1,
//           type: 'bar',
//           data: [10, 15, 5],
//           itemStyle: {
//             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//               { offset: 0, color: '#00FF00' },
//               { offset: 0.5, color: '#0000FF' },
//               { offset: 1, color: '#FFD700' }
//             ])
//           }
//         }
//       ]
//     };

//     myChart.setOption(option);

//     // Cleanup
//     return () => {
//       myChart.dispose();
//     };
//   }, [genderData]);

//   return <div ref={chartRef} style={{ height: '800px' }} />;
// }

// export default Jgender;
// ! end 4




//! gradient bar chart blue gold green 5
// import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';


// function Jgender() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const option = {
//       backgroundColor: '#2c343c',
//       title: {
//         text: 'Gender Distribution',
//         left: 'center',
//         top: 20,
//         textStyle: {
//           color: '#ccc'
//         }
//       },
//       tooltip: {},
//       xAxis: {
//         type: 'category',
//         data: ['Male', 'Female', 'Other']
//       },
//       yAxis: {},
//       series: [
//         {
//           type: 'bar',
//           data: [10, 15, 5],
//           itemStyle: {
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               { offset: 0, color: '#00ff00' },
//               { offset: 0.5, color: '#0000ff' },
//               { offset: 1, color: '#ffff00' }
//             ])
//           }
//         }
//       ]
//     };

//     myChart.setOption(option);

//     // Cleanup
//     return () => {
//       myChart.dispose();
//     };
//   }, []);

//   return <div ref={chartRef} style={{ height: '400px' }} />;
// }

// export default Jgender;
// ! end 5

//! gradient pie chart 6
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import * as echarts from 'echarts';

// function Jgender() {
//   const genderData = useSelector((state) => state.chartReducers.genderData);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!genderData) return;

//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const formattedData = genderData.map((data) => ({
//       value: data.count,
//       name: data.gender,
//       itemStyle: {
//         color: {
//           type: 'radial',
//           x: 0.5,
//           y: 0.5,
//           r: 0.5,
//           colorStops: [
//             {
//               offset: 0,
//               color: data.gender === 'Male' ? '#00FF00' : data.gender === 'Female' ? '#0000FF' : '#FFD700'
//             },
//             {
//               offset: 1,
//               color: data.gender === 'Male' ? '#008000' : data.gender === 'Female' ? '#00008B' : '#FFA500'
//             }
//           ]
//         },
//         shadowBlur: 200,
//         shadowColor: 'rgba(0, 0, 0, 0.5)'
//       }
//     }));

//     const option = {
//       backgroundColor: '#2c343c',
//       title: {
//         text: 'Gender Distribution',
//         left: 'center',
//         top: 20,
//         textStyle: {
//           color: '#ccc'
//         }
//       },
//       tooltip: {
//         trigger: 'item'
//       },
//       series: [
//         {
//           name: 'Gender',
//           type: 'pie',
//           radius: '55%',
//           center: ['50%', '50%'],
//           data: formattedData,
//           roseType: 'radius',
//           label: {
//             color: 'rgba(255, 255, 255, 0.3)'
//           },
//           labelLine: {
//             lineStyle: {
//               color: 'rgba(255, 255, 255, 0.3)'
//             },
//             smooth: 0.2,
//             length: 10,
//             length2: 20
//           },
//           animationType: 'scale',
//           animationEasing: 'elasticOut',
//           animationDelay: function (idx) {
//             return Math.random() * 200;
//           }
//         }
//       ]
//     };

//     myChart.setOption(option);

//     // Cleanup
//     return () => {
//       myChart.dispose();
//     };
//   }, [genderData]);

//   return <div ref={chartRef} style={{ height: '400px' }} />;
// }

// export default Jgender;
// ! end 6



//! pie works 7
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Jgender() {
//   const dispatch = useDispatch();
//   const genderData = useSelector((state) => state.chartReducers.genderData);

//   useEffect(() => {
//     console.log('Fetching gender data...');
//     dispatch({ type: 'FETCH_GENDER_DATA' });
//   }, [dispatch]);

//   console.log('Gender Data:', genderData);

//   if (!genderData) {
//     return null;
//   }

//   const formattedData = [
//     ['gender', 'count'],
//     ...genderData.map((data) => [data.gender, data.count])
//   ];
//   console.log('Gender Data:', genderData);
// //   console.log('Option:', option);
//   const option = {
//     legend: {},
//     tooltip: {
//       trigger: 'axis',
//       showContent: false
//     },
//     dataset: {
//       source: formattedData
//     },
//     xAxis: { type: 'category' },
//     yAxis: { gridIndex: 0 },
//     grid: { top: '55%' },
//     series: [
//       ...genderData.map(() => ({
//         type: 'line',
//         smooth: true,
//         seriesLayoutBy: 'row',
//         emphasis: { focus: 'series' }
//       })),
//       {
//         type: 'pie',
//         id: 'pie',
//         radius: '30%',
//         center: ['50%', '25%'],
//         emphasis: {
//           focus: 'self'
//         },
//         label: {
//           formatter: '{b}: {@[1]} ({d}%)'
//         },
//         encode: {
//           itemName: 'gender',
//           value: 'count',
//           tooltip: 'count'
//         }
//       }
//     ],
//     textStyle: {
//       color: 'white' // Set text color to white for the dark theme
//     },
//     backgroundColor: '#333', // Set background color for the dark theme
      
//   };
//   console.log('Gender Data:', genderData);
//   console.log('Option:', option);
//   const handleUpdateAxisPointer = (event) => {
//     const xAxisInfo = event.axesInfo[0];
//     if (xAxisInfo && xAxisInfo.value !== undefined) {
//       const dimension = xAxisInfo.value + 1;
//       event.target?.setOption({
//         series: {
//           id: 'pie',
//           label: {
//             formatter: '{b}: {@[' + dimension + ']} ({d}%)'
//           },
//           encode: {
//             value: dimension,
//             tooltip: dimension
//           }
//         }
//       });
//     }
//   };
  


//   return (
//     <ReactECharts
//       option={option}
//       style={{ height: '400px', width: '100%' }}
//       onEvents={{ 'updateAxisPointer': handleUpdateAxisPointer }}
      
//     />
//   );
// }

// export default Jgender;
// ! end 7




