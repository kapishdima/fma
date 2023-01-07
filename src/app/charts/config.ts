import { ApexOptions } from 'apexcharts';

type CreateChartConfig = {
  xData: {
    type: 'numeric' | 'category' | 'datetime';
    data: any[];
  };
  color?: string;
};

export const createChartConfig = ({ xData, color }: CreateChartConfig): ApexOptions => ({
  chart: {
    toolbar: {
      show: false,
    },
    parentHeightOffset: 0,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    colors: color ? [color] : undefined,
  },
  stroke: {
    curve: 'smooth',
    colors: color ? [color] : undefined,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    colors: color ? [color] : undefined,
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },

  xaxis: {
    type: xData.type,
    categories: xData.data,
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
});
