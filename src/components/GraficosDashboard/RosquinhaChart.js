import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function RosquinhaChart() {
    const data = {
        labels: ['Sucesso', 'Pendente', 'Não Iniciado'],
        datasets: [
          {
            label: 'Produtivade',
            data: [50, 30, 20],
            backgroundColor: [
              '#00C036',
              '#FFC800',
              '#ED3333'
            ],
          },
        ],
      };
  return <Doughnut data={data} />;
}

export default RosquinhaChart;