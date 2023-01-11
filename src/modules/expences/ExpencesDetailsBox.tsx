import React from 'react';
import { useTheme } from '@mui/material';

import { expencesStats, incomeStats } from 'data';
import { ChartBox, ColumnChart } from 'shared/charts';

export const ExpencesDetailsBox: React.FC = () => {
  const theme = useTheme();

  return (
    <ChartBox
      chart={
        <ColumnChart
          xAxisData={[
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
          ]}
          data={[
            { name: 'Expences', data: expencesStats },
            { name: 'Income', data: incomeStats },
          ]}
          height={400}
          colors={[theme.palette.warning.main, theme.palette.success.main]}
        />
      }
    />
  );
};
