import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

function TopMeds() {
    ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'],
    datasets: [
      {
        data: [10, 20, 30, 15, 5, 12, 8, 18, 25, 17], // Array of 10 values
        backgroundColor: ['#999999', '#EFF700', '#FFCE56', '#33FFF0', '#9966FF', '#36610D', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Pie Chart',
      fontSize: 20,
      fontColor: '#333',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#333',
      },
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.index];
          const label = data.labels[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '500px', height: '450px', position: 'relative', left: '28%', top: '-3em'}}>
      <h3>10 Most Prescribed Medications  </h3>

      <Pie data={data} options={options} />
    </div>
  );
}

export default TopMeds;
