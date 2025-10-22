import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const data = {
    labels: ['Health', 'Snacks'],
    datasets: [
      {
        label: 'Before',
        data: [149, 0],
        backgroundColor: '#06B6D4', // Cyan color
        borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: 'After',
        data: [0, 250],
        backgroundColor: '#6366F1', // Purple/blue color
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Sales Impact Comparison',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} Units`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 250,
        ticks: {
          stepSize: 50,
          callback: function(value) {
            return value;
          }
        },
        grid: {
          color: '#E5E7EB',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
