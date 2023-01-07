import React from 'react';
import { useTheme } from '@mui/material';

import { AreaChart } from '../../shared/charts/AreaChart';
import { incomeStats } from '../../data';

export const IncomeChart: React.FC = () => {
  const theme = useTheme();
  return (
    <AreaChart
      data={incomeStats}
      color={theme.palette.success.main}
      xAxisData={[
        '2018-01-19T00:00:00.000Z',
        '2018-02-19T01:30:00.000Z',
        '2018-03-19T02:30:00.000Z',
        '2018-04-19T03:30:00.000Z',
        '2018-05-19T04:30:00.000Z',
        '2018-06-19T05:30:00.000Z',
        '2018-07-19T06:30:00.000Z',
        '2018-08-19T06:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
        '2018-10-19T06:30:00.000Z',
        '2018-11-19T06:30:00.000Z',
        '2018-12-19T06:30:00.000Z',
      ]}
    />
  );
};
