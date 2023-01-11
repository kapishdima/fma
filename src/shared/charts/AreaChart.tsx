import React from 'react';

import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { useChartTooltip } from './useChartTooltip';
import { createAreaChartConfig } from 'app/charts/config';
import { ChartBaseProps } from './@types';

type ChartProps = ChartBaseProps & {};

export const AreaChart: React.FC<ChartProps> = ({ data, xAxisData, colors, height }) => {
  const { createTooltip } = useChartTooltip();

  const baseChartOptions = createAreaChartConfig({
    xData: {
      type: 'datetime',
      data: xAxisData,
    },
    colors,
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

  return <Chart type="area" height={height} series={data} options={chartOptions} />;
};
