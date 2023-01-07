import React from 'react';

import { NorthEastRounded, TrendingUp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { StatsCard } from '../../shared/stats/StatsCard';
import { IncomeChart } from './IncomeChart';

export const IncomeCard: React.FC = () => {
  return (
    <StatsCard
      color="success"
      title="Income"
      value={200134}
      extraIcon={<NorthEastRounded />}
      subtitle={
        <Box display="flex" alignItems="center" color="success.darker" columnGap={1}>
          <TrendingUp fontSize="small" />
          <Typography variant="body2">
            <b>+8.2%</b> than last month
          </Typography>
        </Box>
      }
      footer={<IncomeChart />}
    />
  );
};
