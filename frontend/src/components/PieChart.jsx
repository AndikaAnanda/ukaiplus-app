import ApexCharts from 'apexcharts';
import { useEffect } from 'react';
const PieChart = () => {

  useEffect(() => {
    const chartElement = document.getElementById('pie-chart')
    if (
      chartElement && typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        chartElement,
        getChartOptions()
      );
    chart.render();
    }
  }, []);

  const getChartOptions = () => {
    return {
      series: [13.2, 9.8, 12.4, 16.5, 8.9, 14.1, 7.0, 17.1],
      colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'],
      chart: {
        height: 420,
        width: '100%',
        type: 'pie',
      },
      stroke: {
        colors: ['white'],
        lineCap: '',
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: '100%',
          dataLabels: {
            offset: -25,
          },
        },
      },
      labels: ['Farmakoterapi & Farmasi Klinis', 'Manajemen & Pelayanan Farmasi', 'Regulasi Farmasi', 'Teknologi Farmasi', 'Kimia Farmasi', 'Biologi Farmasi', 'Farmasi Herbal', 'Farmasi Industri'],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: 'Inter, sans-serif',
        },
      },
      legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif',
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + '%';
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + '%';
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };

    
  return (
      <div className="py-4 flex" id="pie-chart"></div>
  );
};

export default PieChart;
