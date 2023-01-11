import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useCountUp } from 'react-countup';

const BALANCE = 100044;

export const BalancePreview: React.FC = () => {
  const id = `${Date.now() + 1000}_stat-value`;
  const theme = useTheme();
  useCountUp({ ref: id, end: BALANCE, prefix: '₴', duration: 0.8, separator: ',' });

  return (
    <Box
      sx={{
        background: theme.palette.grey[200],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
      }}>
      <Typography variant="subtitle2" color="text.primary">
        Current Balance
      </Typography>

      <Typography variant="h3" color="text.primary" id={id}>
        {BALANCE}
      </Typography>
    </Box>
  );
};
