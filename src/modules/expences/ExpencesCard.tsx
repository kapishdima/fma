import { SouthWestRounded, TrendingDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { StatsCard } from '../../shared/stats/StatsCard';

export const ExpencesCard: React.FC = () => {
  return (
    <StatsCard
      color="warning"
      title="Expences"
      value="50,134"
      extraIcon={<SouthWestRounded />}
      subtitle={
        <Box display="flex" alignItems="center" color="warning.darker" columnGap={1}>
          <TrendingDown fontSize="small" />
          <Typography variant="body2">
            <b>-8.2%</b> than last month
          </Typography>
        </Box>
      }
    />
  );
};
