import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';
function Drugs() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/prescriptions');
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
    const option = {
      backgroundColor: 'transparent',
      title: {
        text: 'Top 10 Prescriptions',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        bottom: '-1.2%', // Adjust the bottom value here (e.g., '10%', '15%') for further positioning
        textStyle: {
          color: '#ccc',
        },
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
        iconStyle: {
          normal: {
            borderColor: '#fff',
          },
        },
        top: 13, // Position the toolbox at the top of the grid
        right: 20,
      },
      series: [
        {
          name: 'Prescriptions',
          type: 'pie',
          radius: '50%',
          data: chartData.map((item) => ({
            name: item.drug_name,
            value: item.count,
          })),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
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
export default Drugs;
//! Jg new axios
// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';
// function TopMeds() {
//   ChartJS.register(ArcElement, Tooltip, Legend);
//   const [chartData, setChartData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/prescriptions')
//         const data = response.data;
//         const chartData = {
//           labels: data.map((item) => item.drug_name),
//           datasets: [
//             {
//               data: data.map((item) => item.count),
//               backgroundColor: ['#999999', '#EFF700', '#FFCE56', '#33FFF0', '#9966FF', '#36610D', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
//             },
//           ],
//         };
//         setChartData(chartData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setChartData(null);
//       }
//     };
//     fetchData();
//   }, []);
//   const options = {
//     title: {
//       display: true,
//       text: 'Pie Chart',
//       fontSize: 20,
//       fontColor: '#333',
//     },
//     legend: {
//       display: true,
//       position: 'bottom',
//       labels: {
//         fontColor: '#333',
//       },
//     },
//     tooltips: {
//       enabled: true,
//       callbacks: {
//         label: (tooltipItem, data) => {
//           const dataset = data.datasets[tooltipItem.datasetIndex];
//           const value = dataset.data[tooltipItem.index];
//           const label = data.labels[tooltipItem.index];
//           return `${label}: ${value}%`;
//         },
//       },
//     },
//     animation: {
//       animateRotate: true,
//       animateScale: true,
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };
//   return (
//     <div style={{ width: '500px', height: '450px', position: 'relative', left: '28%', top: '-3em' }}>
//       <h3>10 Most Prescribed Medications</h3>
//       {chartData ? <Pie data={chartData} options={options} /> : <p>No data available</p>}
//     </div>
//   );
// }
// export default TopMeds;