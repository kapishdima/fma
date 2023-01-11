import React from 'react';

import Chart from 'react-apexcharts';
import { ChartBaseProps } from './@types';
import { createColumnChartConfig } from 'app/charts/config';
import { useTheme } from '@mui/material';

type ColumnChartProps = ChartBaseProps & {};

export const ColumnChart: React.FC<ColumnChartProps> = ({ data, xAxisData, colors, height }) => {
  const theme = useTheme();
  const options = createColumnChartConfig({
    xData: { type: 'category', data: xAxisData },
    colors,
    textColor: theme.palette.text.disabled,
  });

  return <Chart type="bar" series={data} options={options} height={height} />;
};
