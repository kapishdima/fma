import React from 'react';
import { SouthWestRounded, TrendingDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { StatsCard } from 'shared/stats';
import { ExpencesChart } from './ExpencesChart';

export const ExpencesCard: React.FC = () => {
  return (
    <StatsCard
      color="warning"
      title="Expences"
      value={50134}
      extraIcon={<SouthWestRounded />}
      subtitle={
        <Box display="flex" alignItems="center" color="warning.darker" columnGap={1}>
          <TrendingDown fontSize="small" />
          <Typography variant="body2">
            <b>-8.2%</b> than last month
          </Typography>
        </Box>
      }
      footer={<ExpencesChart />}
    />
  );
};
