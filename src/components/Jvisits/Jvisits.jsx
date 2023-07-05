//Jvisits.jsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function Jvisits() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    console.log('Fetching patient visits data...');
    const data = [
      { count: 15, type: 'Routine Check-up' },
      { count: 10, type: 'Specialist Appointment' },
      { count: 5, type: 'Emergency Visit' },
    ];

    // Chart 1 - Funnel Chart
    const chartDom1 = chartRef1.current;
    const myChart1 = echarts.init(chartDom1, 'dark');

    const option1 = {
      title: {
        text: 'Patient Visits (Funnel Chart)',
        top: '5%', // Adjust the top position as needed
        left: 'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%',
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        top: 'bottom', // Adjust the top position as needed
        left: 'center',
        data: data.map((visit) => visit.type),
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: '20%', // Adjust the top position as needed
          bottom: '20%', // Adjust the bottom position as needed
          width: '80%',
          min: 0,
          max: Math.max(...data.map((visit) => visit.count)),
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid',
            },
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: data.map((visit) => ({
            value: visit.count,
            name: visit.type,
          })),
        },
      ],
    };

    option1 && myChart1.setOption(option1);

    // Chart 2 - Pictorial Bar Chart
    const chartDom2 = chartRef2.current;
    const myChart2 = echarts.init(chartDom2, 'dark');

    const option2 = {
      color: ['#bb0004', '#FFD48A'],
      legend: {
        data: ['Patient Visits', 'Reference'],
      },
      xAxis: {
        data: data.map((visit) => visit.type),
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
      },
      yAxis: {
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'pictorialBar',
          name: 'Patient Visits',
          symbol: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z',
          symbolSize: [50, 120],
          z: 10,
          data: data.map((visit) => ({
            value: visit.count,
            symbolPosition: 'start',
          })),
        },
        {
          type: 'bar',
          name: 'Reference',
          barGap: '-100%',
          data: data.map((visit) => visit.count),
        },
      ],
    };

    option2 && myChart2.setOption(option2);
  }, []);

  return (
    <div>
      <div className="chartContainer" ref={chartRef1} />
      <div className="chartContainer" ref={chartRef2} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        
      </div>
    </div>
  );
}

export default Jvisits;












//! pictorial bar
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



