import { ApexOptions } from 'apexcharts';

type CreateChartConfig = {
  xData: {
    type: 'numeric' | 'category' | 'datetime';
    data: any[];
  };
  colors?: string[];
  textColor?: string;
};

export const createAreaChartConfig = ({ xData, colors }: CreateChartConfig): ApexOptions => ({
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
    colors: colors ? colors : undefined,
  },
  stroke: {
    curve: 'smooth',
    colors: colors ? colors : undefined,
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
    colors: colors ? colors : undefined,
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

export const createColumnChartConfig = ({
  xData,
  colors,
  textColor,
}: CreateChartConfig): ApexOptions => ({
  chart: {
    foreColor: textColor,
    fontFamily: 'Public Sans',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: '25%',
    },
  },
  colors: colors ? colors : undefined,
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    type: xData.type,
    categories: xData.data,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    show: true,
    position: 'right',
    fontSize: '12px',
    fontFamily: 'Public Sans',
    fontWeight: 500,
    markers: {
      radius: 50,
    },
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return '$ ' + val + ' thousands';
      },
    },
  },
});
