import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function TopMeds() {
  const topMedications = useSelector((state) => state.chartReducers.topMedications);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/prescriptions');
        const data = response.data;
        dispatch({ type: 'FETCH_TOP_MEDS_SUCCESS', payload: data });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const data = {
    labels: topMedications.map((med) => med.label),
    datasets: [
      {
        data: topMedications.map((med) => med.value),
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
