import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Age() {
  const dispatch = useDispatch();
  const ages = useSelector(state => state.chartReducers.ages);

  useEffect(() => {
    console.log('Fetching ages...');
    dispatch({ type: 'FETCH_AGES' });
  }, [dispatch]);

  useEffect(() => {
    console.log('Ages:', ages);
  }, [ages]);

  const ageRanges = ages.map(age => age.range); // Extract age ranges from data

  const option1 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Age Range of Patients',
      textStyle: {
        color: 'white',

      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ageRanges,
      textStyle: {
        color: '#333',
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ageRanges,
        axisLabel: {
          color: '#333',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#333',
        },
      },
    ],
    series: [
      {
        name: 'Age Range',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: ages.map(age => age.count),
      },
    ],
  };

  const option2 = {
    title: {
      text: 'Age Range of Patients',
      subtext: '2020-2023',
      left: 'center',
      textStyle: {
        color: '#fff',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: ages.map(age => ({
          value: age.count,
          name: age.range,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
return (
  <div>
    <div>
      <ReactECharts option={option1} style={{ height: '400px', width: '80%', margin: '0 auto' }} />
    </div>
    <div style={{ marginTop: '50px' }}>
      <ReactECharts option={option2} style={{ height: '400px', width: '80%', margin: '0 auto' }} />
    </div>
  </div>
);
}

export default Age;

//!nightingale 2 charts
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Age() {
//   const dispatch = useDispatch();
//   const ages = useSelector(state => state.chartReducers.ages);

//   useEffect(() => {
//     console.log('Fetching ages...');
//     dispatch({ type: 'FETCH_AGES' });
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Ages:', ages);
//   }, [ages]);

//   const ageRanges = ages.map(age => age.range); // Extract age ranges from data

//   const option1 = {
//     color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//     title: {
//       text: 'Age Range of Patients',
//       textStyle: {
//         color: 'white',
//       },
//     },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'cross',
//         label: {
//           backgroundColor: '#6a7985',
//         },
//       },
//     },
//     legend: {
//       data: ageRanges,
//       textStyle: {
//         color: '#333',
//       },
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {},
//       },
//     },
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: 'category',
//         boundaryGap: false,
//         data: ageRanges,
//         axisLabel: {
//           color: '#333',
//         },
//       },
//     ],
//     yAxis: [
//       {
//         type: 'value',
//         axisLabel: {
//           color: '#333',
//         },
//       },
//     ],
//     series: [
//       {
//         name: '0-10',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {
//           opacity: 0.8,
//           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             {
//               offset: 0,
//               color: 'rgb(128, 255, 165)',
//             },
//             {
//               offset: 1,
//               color: 'rgb(1, 191, 236)',
//             },
//           ]),
//         },
//         emphasis: {
//           focus: 'series',
//         },
//         data: ages.map(age => age.count),
//       },
//     ],
//   };

//   const option2 = {
//     dark: true,
//     legend: {
//       top: 'bottom',
//       textStyle: {
//         color: '#fff',
//       },
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         mark: { show: true },
//         dataView: { show: true, readOnly: false },
//         restore: { show: true },
//         saveAsImage: { show: true },
//       },
//     },
//     series: [
//       {
//         name: 'Nightingale Chart',
//         type: 'pie',
//         radius: [50, 250],
//         center: ['50%', '50%'],
//         roseType: 'area',
//         itemStyle: {
//           borderRadius: 8,
//         },
//         data: ages.map((age, index) => ({
//           value: age.count,
//           name: age.range,
//         })),
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option1} style={{ height: '400px', marginBottom: '20px', width: '80%' }} />
//       <ReactECharts option={option2} style={{ height: '400px', width: '80%'  }} />
//     </div>
//   );
// }

// export default Age;






//!age range blue gradient
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Age() {
//   const dispatch = useDispatch();
//   const ages = useSelector(state => state.chartReducers.ages);

//   useEffect(() => {
//     console.log('Fetching ages...');
//     dispatch({ type: 'FETCH_AGES' });
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Ages:', ages);
//   }, [ages]);

//   const ageRanges = ages.map(age => age.range); // Extract age ranges from data

//   const option = {
//     color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//     title: {
//       text: 'Age Range of Patients',
//       textStyle: {
//         color: 'white',
//       },
//     },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'cross',
//         label: {
//           backgroundColor: '#6a7985',
//         },
//       },
//     },
//     legend: {
//       data: ageRanges, // Use extracted age ranges as legend data
//       textStyle: {
//         color: '#333',
//       },
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {},
//       },
//     },
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: 'category',
//         boundaryGap: false,
//         data: ageRanges,
//         axisLabel: {
//           color: '#333',
//         },
//       },
//     ],
//     yAxis: [
//       {
//         type: 'value',
//         axisLabel: {
//           color: '#333',
//         },
//       },
//     ],
//     series: [
//       {
//         name: '0-10',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {
//           opacity: 0.8,
//           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             {
//               offset: 0,
//               color: 'rgb(128, 255, 165)',
//             },
//             {
//               offset: 1,
//               color: 'rgb(1, 191, 236)',
//             },
//           ]),
//         },
//         emphasis: {
//           focus: 'series',
//         },
//         data: ages.map(age => age.count),
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option} style={{ height: '400px' }} />
//     </div>
//   );
// }

// export default Age;



// //Jchart.jsx
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// // import echarts from 'echarts'; 
// import * as echarts from 'echarts';
// function Age() {
//   const dispatch = useDispatch();
//   const ages = useSelector(state => state.chartReducers.ages);

//   useEffect(() => {
//     console.log('Fetching ages...');
//     dispatch({ type: 'FETCH_AGES' });
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Ages:', ages);
//   }, [ages]);

//   const option = {
//     color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//     title: {
//       text: 'Age Range of Patients',
//     },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'cross',
//         label: {
//           backgroundColor: '#6a7985',
//         },
//       },
//     },
//     legend: {
//       data: ['0-10', '11-20', '21-30', '31-40', '41-50'],
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {},
//       },
//     },
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: 'category',
//         boundaryGap: false,
//         data: ages.map(age => age.range),
//       },
//     ],
//     yAxis: [
//       {
//         type: 'value',
//       },
//     ],
//     series: [
//       {
//         name: '0-10',
//         type: 'line',
//         stack: 'Total',
//         smooth: true,
//         lineStyle: {
//           width: 0,
//         },
//         showSymbol: false,
//         areaStyle: {
//           opacity: 0.8,
//           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             {
//               offset: 0,
//               color: 'rgb(128, 255, 165)',
//             },
//             {
//               offset: 1,
//               color: 'rgb(1, 191, 236)',
//             },
//           ]),
//         },
//         emphasis: {
//           focus: 'series',
//         },
//         data: ages.map(age => age.count),
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option} style={{ height: '400px' }} />
//     </div>
//   );
// }

// export default Age;





//! solid 
// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const PatientsChart = () => {
//   // Retrieve the data from the SQL queries
//   const totalPatients = 15; // Replace with the actual total patients count from the query
//   const visitData = [
//     { type: 'Routine Check-up', count: 15 },
//     { type: 'Specialist Appointment', count: 10 },
//     { type: 'Emergency Visit', count: 5 }
//   ]; // Replace with the actual visit data from the query

//   // Prepare the data for the chart
//   const visitTypes = visitData.map(entry => entry.type);
//   const visitCounts = visitData.map(entry => entry.count);

//   // Create the chart options
//   const options = {
//     tooltip: {
//       trigger: 'axis'
//     },
//     legend: {
//       data: ['Total Patients', 'Visits by Type']
//     },
//     xAxis: {
//       type: 'category',
//       data: ['Total Patients']
//     },
//     yAxis: {
//       type: 'value',
//       min: 0
//     },
//     series: [
//       {
//         name: 'Total Patients',
//         type: 'bar',
//         data: [totalPatients],
//         itemStyle: {
//           color: 'rgba(54, 162, 235, 0.5)'
//         }
//       },
//       {
//         name: 'Visits by Type',
//         type: 'bar',
//         data: visitCounts,
//         itemStyle: {
//           color: 'rgba(255, 99, 132, 0.5)'
//         }
//       }
//     ]
//   };

//   return <ReactECharts option={options} style={{ height: '400px' }} />;
// };

// export default PatientsChart;


// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     // Simulated data for family size by year
//     const yearData = [
//       { range: '1-2', '2020': 50, '2021': 80, '2022': 65, '2023': 95 },
//       { range: '3-4', '2020': 35, '2021': 60, '2022': 45, '2023': 70 },
//       { range: '5-6', '2020': 40, '2021': 75, '2022': 60, '2023': 85 },
//       { range: '7+', '2020': 30, '2021': 55, '2022': 40, '2023': 65 },
//     ];

//     setFamilySizeData(data);
//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeOptions = {
//     title: {
//       text: 'Family Size Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
//               },
//             ],
//           },
//         },
//       },
//     ],
//     backgroundColor: '#222',
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   const familySizeYearOptions = {
//     title: {
//       text: 'Family Size by Year',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeYearData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: ['2020', '2021', '2022', '2023'].map((year) => ({
//       name: year,
//       type: 'line',
//       data: familySizeYearData.map((entry) => entry[year]),
//       lineStyle: {
//         width: 2,
//         shadowColor: 'rgba(0,0,0,0.4)',
//         shadowBlur: 10,
//         shadowOffsetY: 10,
//       },
//       areaStyle: {
//         color: year === '2020' ? 'red' : year === '2021' ? 'blue' : year === '2022' ? 'green' : 'gold',
//       },
//     })),
//     backgroundColor: '#222',
//     legend: {
//       data: ['2020', '2021', '2022', '2023'],
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   const ageRangeOptions = {
//     title: {
//       text: 'Age Range Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Age Range',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'bar',
//         itemStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
//               },
//             ],
//           },
//         },
//       },
//     ],
//     backgroundColor: '#222',
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   return (
//     <div>
//       <div>
//         <h2>Family Size Chart</h2>
//         <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Age Range Chart</h2>
//         <ReactECharts option={ageRangeOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;


//const data = [
//   { range: '0-10', count: 50 },
//   { range: '11-20', count: 35 },
//   { range: '21-30', count: 20 },
//   { range: '31-40', count: 15 },
//   { range: '41-50', count: 10 },
//   { range: '51+', count: 5 }
// ];