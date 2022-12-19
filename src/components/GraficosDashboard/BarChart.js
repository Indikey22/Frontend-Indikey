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

 

 function BarChart() {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Vendas ',
          },
        },
      };
      
      const labels = ['Jan', 'Feb', 'Mar', 'Abri', 'Mai', 'Jun', 'Jul'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Confira suas melhores vendas do ano',
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: '#0077E4',
            
          },
          
        ],
      };
  return <Bar options={options} data={data} />;
}

export default BarChart;