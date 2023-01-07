import React from 'react';

import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { useChartTooltip } from './useChartTooltip';
import { createChartConfig } from '../../app/charts/config';

type ChartProps = {
  data: number[];
  xAxisData: any[];
  color?: string;
};

export const AreaChart: React.FC<ChartProps> = ({ data, xAxisData, color }) => {
  const { createTooltip } = useChartTooltip();

  const chartSeries: ApexOptions['series'] = [{ name: 'Chart', data }];
  const baseChartOptions = createChartConfig({
    xData: {
      type: 'datetime',
      data: xAxisData,
    },
    color,
  });
  const chartOptions: ApexOptions = {
    ...baseChartOptions,
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const tooltipData = series[seriesIndex][dataPointIndex];

        return createTooltip(tooltipData);
      },
    },
  };

  return <Chart type="area" series={chartSeries} options={chartOptions} />;
};
