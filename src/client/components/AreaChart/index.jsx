import React, { memo } from 'react';
import Chart from 'react-apexcharts';

const AreaChart = memo(({ title, seriesTitle, seriesData }) => {
  const options = {
    title: {
      text: title,
      style: {
        fontSize: '16px',
      },
    },
    chart: {
      width: '100%',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
    },
    yaxis: {
      forceNiceScale: true,
      opposite: true,
      labels: {
        formatter: value => `R$ ${value.toLocaleString('pt-BR')}`,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
      y: {
        formatter: value => `R$ ${value.toLocaleString('pt-BR')}`,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: seriesTitle,
      data: seriesData,
    },
  ];

  return <Chart series={series} options={options} type="area" />;
});

export default AreaChart;
