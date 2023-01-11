import { Box, Paper, Select, Typography, useTheme } from '@mui/material';
import React from 'react';

type ChartBoxProps = {
  chart: JSX.Element;
};

export const ChartBox: React.FC<ChartBoxProps> = ({ chart }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: '100%',
        padding: theme.spacing(2),
      }}>
      <Box
        sx={{
          py: theme.spacing(2),
          px: theme.spacing(1),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Typography variant="h6">Balance Statistics</Typography>
        <Select size="small" />
      </Box>
      <Box>{chart}</Box>
    </Paper>
  );
};
