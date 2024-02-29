import React from 'react';
import './DoghnutChart.scss';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoghnutChart(props) {

  const data = {
    labels: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6'],
    datasets: [
      {
        data: props.data.dataset,
        backgroundColor: [
          '#E6FF03',
          '#99FF32',
          '#52B03B',
          '#0D8135',
          '#A9A9A9',
          '#2a2a2a',
        ],
      },
    ],
  };

  return(
    <div className={`doghnutChart ${props.className}`} style={props.style}>
      <div className='container doghnutChart-chartWrapper' onClick={props.onClick}>
        <Doughnut
        className='doghnutChart-chart' 
        data={data} 
        options={{
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false,
            },
          },
        }}/>
      </div>
      <div className='doghnutChart-absoluteContainer'>
        <div className='doghnutChart-content'>
          {props.data.icon}
        </div>
      </div>
    </div>
  )
}
