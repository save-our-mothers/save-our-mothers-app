//Jfam.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Jfam() {
  const dispatch = useDispatch();
  const familySize = useSelector((state) => state.chartReducers.familySize);

  useEffect(() => {
    console.log('Fetching family size...');
    dispatch({ type: 'FETCH_FAMILY_SIZE' });
  }, [dispatch]);

  const gradients = [
    [
      {
        offset: 0,
        color: 'rgba(128, 255, 165, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(0, 221, 255, 1)', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'rgba(255, 128, 128, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(255, 0, 0, 1)', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'rgba(255, 255, 128, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 0, 1)', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'rgba(128, 128, 255, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(0, 0, 255, 1)', // End color
      },
    ],
    // Add more gradients here...
  ];

  const colorPalette = ['#FF4D4F', '#95DE64', '#FFC53D', '#36CFC9']; // Define the color palette for bar chart

  const generatePieOption = () => {
    const option = {
      title: {
        text: 'Family Size Range',
        textStyle: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        top: '12%',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 16,
        textStyle: {
          color: 'white',
        },
        data: familySize.map((size) => size.range),
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: { readOnly: false },
          restore: {},
        },
      },
      series: [
        {
          name: 'Family Size',
          type: 'pie',
          radius: '50%',
          center: ['50%', '55%'], // Adjust the vertical position of the pie chart
          data: familySize.map((size, index) => ({
            value: size.count,
            name: size.range,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, gradients[index % gradients.length]),
            },
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
    return option;
  };

  const generateBarOption = () => {
    const option = {
      color: colorPalette,
      title: {
        text: 'Family Size Range',
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
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: 'white',
        },
        data: familySize.map((size) => size.range),
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Family Size',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(1, 0, 0, 1)',
            },
          },
          data: familySize.map((size, index) => ({
            value: size.count,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colorPalette[index],
                },
                {
                  offset: 1,
                  color: 'rgba(0, 0, 0, 0)', // Use transparent color as the end of the gradient
                },
              ]),
            },
          })),
        },
      ],
    };
    return option;
  };

  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <ReactECharts
          option={generatePieOption()}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <ReactECharts
          option={generateBarOption()}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </>
  );
}

export default Jfam;




//
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';


// function Jfam() {
//   const dispatch = useDispatch();
//   const familySize = useSelector((state) => state.chartReducers.familySize);

//   useEffect(() => {
//     console.log('Fetching family size...');
//     dispatch({ type: 'FETCH_FAMILY_SIZE' });
//   }, [dispatch]);

//   const gradients = [
//     [
//       {
//         offset: 0,
//         color: 'rgba(128, 255, 165, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(0, 221, 255, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(255, 128, 128, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(255, 0, 0, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(255, 255, 128, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(255, 255, 0, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(128, 128, 255, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(0, 0, 255, 1)', // End color
//       },
//     ],
//     // Add more gradients here...
//   ];

//   const colorPalette = ['#FF4D4F', '#95DE64', '#FFC53D', '#36CFC9']; // Define the color palette for bar chart

//   const generatePieOption = () => {
//     const option = {
//       title: {
//         text: 'Family Size Range',
//         textStyle: {
//           color: 'white',
//           fontSize: 16,
//           fontWeight: 'bold',
//         },
//         top: '5%',
//         left: 'center',
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b}: {c} ({d}%)',
//       },
//       legend: {
//         orient: 'horizontal',
//         top: '12%',
//         itemWidth: 12,
//         itemHeight: 12,
//         itemGap: 16,
//         textStyle: {
//           color: 'white',
//         },
//         data: familySize.map((size) => size.range),
//       },
//       series: [
//         {
//           name: 'Family Size',
//           type: 'pie',
//           radius: '50%',
//           center: ['50%', '55%'], // Adjust the vertical position of the pie chart
//           data: familySize.map((size, index) => ({
//             value: size.count,
//             name: size.range,
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 1, 1, gradients[index % gradients.length]),
//             },
//           })),
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(0, 0, 0, 0.5)',
//             },
//           },
//         },
//       ],
//     };
//     return option;
//   };

//   const generateBarOption = () => {
//     const option = {
//       color: colorPalette,
//       title: {
//         text: 'Family Size Range',
//         textStyle: {
//           color: 'white',
//           fontSize: 16,
//           fontWeight: 'bold',
//         },
//         top: '5%',
//         left: 'center',
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow',
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true,
//       },
//       xAxis: {
//         type: 'category',
//         axisLabel: {
//           color: 'white',
//         },
//         data: familySize.map((size) => size.range),
//       },
//       yAxis: {
//         type: 'value',
//         axisLabel: {
//           color: 'white',
//         },
//       },
//       series: [
//         {
//           name: 'Family Size',
//           type: 'bar',
//           barWidth: '60%',
//           itemStyle: {
//             emphasis: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(1, 0, 0, 1)',
//             },
//           },
//           data: familySize.map((size, index) => ({
//             value: size.count,
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                   offset: 0,
//                   color: colorPalette[index],
//                 },
//                 {
//                   offset: 1,
//                   color: 'rgba(0, 0, 0, 0)', // Use transparent color as the end of the gradient
//                 },
//               ]),
//             },
//           })),
//         },
//       ],
//     };
//     return option;
//   };

//   return (
//     <>
//       <div style={{ width: '100%', height: '400px' }}>
//         <ReactECharts option={generatePieOption()} style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div style={{ width: '100%', height: '400px' }}>
//         <ReactECharts option={generateBarOption()} style={{ width: '100%', height: '100%' }} />
//       </div>
//     </>
//   );
// }

// export default Jfam;


//* npm install echarts echarts-for-react
//*npm install echarts --save
//*npm install echarts@latest --save
//*npm install echarts-for-react --save
//* npm install echarts-theme-dark
//! gradient pie correct
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Jfam() {
//   const dispatch = useDispatch();
//   const familySize = useSelector((state) => state.chartReducers.familySize);

//   useEffect(() => {
//     console.log('Fetching family size...');
//     dispatch({ type: 'FETCH_FAMILY_SIZE' });
//   }, [dispatch]);

//   const gradients = [
//     [
//       {
//         offset: 0,
//         color: 'rgba(128, 255, 165, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(0, 221, 255, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(255, 128, 128, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(255, 0, 0, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(255, 255, 128, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(255, 255, 0, 1)', // End color
//       },
//     ],
//     [
//       {
//         offset: 0,
//         color: 'rgba(128, 128, 255, 1)', // Start color
//       },
//       {
//         offset: 1,
//         color: 'rgba(0, 0, 255, 1)', // End color
//       },
//     ],
//     // Add more gradients here...
//   ];

//   const generateOption = () => {
//     const option = {
//       title: {
//         text: 'Family Size Range',
//         textStyle: {
//           color: 'white',
//           fontSize: 16,
//           fontWeight: 'bold',
//         },
//         top: '5%',
//         left: 'center',
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b}: {c} ({d}%)',
//       },
//       legend: {
//         orient: 'horizontal',
//         top: '12%',
//         itemWidth: 12,
//         itemHeight: 12,
//         itemGap: 16,
//         textStyle: {
//           color: 'white',
//         },
//         data: familySize.map((size) => size.range),
//       },
//       series: [
//         {
//           name: 'Family Size',
//           type: 'pie',
//           radius: '50%',
//           center: ['50%', '55%'], // Adjust the vertical position of the pie chart
//           data: familySize.map((size, index) => ({
//             value: size.count,
//             name: size.range,
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 1, 1, gradients[index % gradients.length]),
//             },
//           })),
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(0, 0, 0, 0.5)',
//             },
//           },
//         },
//       ],
//     };
//     return option;
//   };

//   return (
//     <div style={{ width: '100%', height: '400px' }}>
//       <ReactECharts option={generateOption()} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// }

// export default Jfam;







//!grandient bar
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Jfam() {
//   const dispatch = useDispatch();
//   const familySize = useSelector((state) => state.chartReducers.familySize);

//   useEffect(() => {
//     console.log('Fetching family size...');
//     dispatch({ type: 'FETCH_FAMILY_SIZE' });
//   }, [dispatch]);

//   // Generate the option based on the fetched data
//   const generateOption = () => {
//     const colorPalette = ['#FF4D4F', '#95DE64', '#FFC53D', '#36CFC9']; // Define the color palette

//     const option = {
//       color: colorPalette,
//       title: {
//         text: 'Family Size Range',
//         textStyle: {
//           color: 'white',
//           fontSize: 16,
//           fontWeight: 'bold',
//         },
//         top: '5%',
//         left: 'center',
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow',
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true,
//       },
//       xAxis: {
//         type: 'category',
//         axisLabel: {
//           color: 'white',
//         },
//         data: familySize.map((size) => size.range),
//       },
//       yAxis: {
//         type: 'value',
//         axisLabel: {
//           color: 'white',
//         },
//       },
//       series: [
//         {
//           name: 'Family Size',
//           type: 'bar',
//           barWidth: '60%',
//           itemStyle: {
//             emphasis: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(1, 0, 0, 1)',
//             },
//           },
//           data: familySize.map((size, index) => ({
//             value: size.count,
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                   offset: 0,
//                   color: colorPalette[index],
//                 },
//                 {
//                   offset: 1,
//                   color: 'rgba(0, 0, 0, 0)', // Use transparent color as the end of the gradient
//                 },
//               ]),
//             },
//           })),
//         },
//       ],
//     };
//     return option;
//   };

//   return (
//     <div style={{ width: '100%', height: '400px' }}>
//       <ReactECharts option={generateOption()} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// }

// export default Jfam;





//!
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Jfam() {
//   const dispatch = useDispatch();
//   const familySize = useSelector((state) => state.chartReducers.familySize);

//   useEffect(() => {
//     console.log('Fetching family size...');
//     dispatch({ type: 'FETCH_FAMILY_SIZE' });
//   }, [dispatch]);

//   const generateOptions = () => {
//     const pieOption = {
     
//       tooltip: {
//         trigger: 'item',
//       },
//       legend: {
//         orient: 'horizontal',
//         top: '30px',
//         left: 'center',
//         itemGap: 10,
//         textStyle: {
//           color: 'white',
//         },
//       },
//       series: [
//         {
//           name: 'Family Size',
//           type: 'pie',
//           radius: '50%',
//           data: familySize.map((size) => ({ value: size.count, name: size.range })),
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(0, 0, 0, 0.5)',
//             },
//           },
//         },
//       ],
//     };
// <br></br>

//     const areaOption = {
//       color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
   
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
//         orient: 'horizontal',
//         top: '0px',
//         left: 'center',
//         itemGap: 40,
//         data: ['1-2', '3-4', '5-6', '7+', 'Line 5'],
//         textStyle: {
//           color: 'white',
//         },
//       },
//       toolbox: {
//         feature: {
//           saveAsImage: {},
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           boundaryGap: false,
//           data: ['', '', '', '', '', '', ''],
//           axisLabel: {
//             color: 'white',
//           },
//         },
//       ],
//       yAxis: [
//         {
//           type: 'value',
//           axisLabel: {
//             color: 'white',
//           },
//         },
//       ],
//       series: [
//         {
//           name: '1-2',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {
//             opacity: 0.8,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               {
//                 offset: 0,
//                 color: 'rgb(128, 255, 165)',
//               },
//               {
//                 offset: 1,
//                 color: 'rgb(1, 191, 236)',
//               },
//             ]),
//           },
//           emphasis: {
//             focus: 'series',
//           },
//           data: [140, 232, 101, 264, 90, 340, 250],
//         },
//         {
//           name: '3-4',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {
//             opacity: 0.8,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               {
//                 offset: 0,
//                 color: 'rgb(0, 221, 255)',
//               },
//               {
//                 offset: 1,
//                 color: 'rgb(77, 119, 255)',
//               },
//             ]),
//           },
//           emphasis: {
//             focus: 'series',
//           },
//           data: [120, 282, 111, 234, 220, 340, 310],
//         },
//         {
//           name: '5-6',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {
//             opacity: 0.8,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               {
//                 offset: 0,
//                 color: 'rgb(55, 162, 255)',
//               },
//               {
//                 offset: 1,
//                 color: 'rgb(116, 21, 219)',
//               },
//             ]),
//           },
//           emphasis: {
//             focus: 'series',
//           },
//           data: [320, 132, 201, 334, 190, 130, 220],
//         },
//         {
//           name: '7+',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           areaStyle: {
//             opacity: 0.8,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               {
//                 offset: 0,
//                 color: 'rgb(255, 0, 135)',
//               },
//               {
//                 offset: 1,
//                 color: 'rgb(135, 0, 157)',
//               },
//             ]),
//           },
//           emphasis: {
//             focus: 'series',
//           },
//           data: [220, 402, 231, 134, 190, 230, 120],
//         },
//         {
//           name: 'Line 5',
//           type: 'line',
//           stack: 'Total',
//           smooth: true,
//           lineStyle: {
//             width: 0,
//           },
//           showSymbol: false,
//           label: {
//             show: true,
//             position: 'top',
//           },
//           areaStyle: {
//             opacity: 0.8,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//               {
//                 offset: 0,
//                 color: 'rgb(255, 191, 0)',
//               },
//               {
//                 offset: 1,
//                 color: 'rgb(224, 62, 76)',
//               },
//             ]),
//           },
//           emphasis: {
//             focus: 'series',
//           },
//           data: [22, 32, 81, 34, 20, 90, 50],
//         },
//       ],
//     };

//     return [pieOption, areaOption];
//   };

//   return (
//     <div>
//       <div style={{ width: '100%', height: '400px' }}>
//         <h2 style={{ color: 'white', textAlign: 'center' }}>Family Size Range</h2>
//         <ReactECharts option={generateOptions()[0]} style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
//         <h2 style={{ color: 'white', textAlign: 'center' }}>Family Size Ranges</h2>
//         <ReactECharts option={generateOptions()[1]} style={{ width: '100%', height: '100%' }} />
//       </div>
//     </div>
//   );
// }

// export default Jfam;







//! gradient blue no legend
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// function Jfam() {
//   const dispatch = useDispatch();
//   const familySize = useSelector((state) => state.chartReducers.familySize);

//   useEffect(() => {
//     console.log('Fetching family size...');
//     dispatch({ type: 'FETCH_FAMILY_SIZE' });
//   }, [dispatch]);

//   const option = {
//     color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//     title: {
//       text: 'Family Size Range',
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
//       data: familySize.map((size) => size.range),
//       textStyle: {
//         color: '#333',
//       },
//       itemWidth: 10, // Adjust the width of legend items
//       itemHeight: 10, // Adjust the height of legend items
//       itemGap: 20, // Adjust the gap between legend items
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
//         data: familySize.map((size) => size.range),
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
//         name: 'Family Size',
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
//         data: familySize.map((size) => size.count),
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option} style={{ height: '400px' }} />
//     </div>
//   );
// }

// export default Jfam;
