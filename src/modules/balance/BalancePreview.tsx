import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export const BalancePreview: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        background: theme.palette.grey[200],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
      }}>
      <Typography variant="subtitle2" color="text.primary">
        Current Balance
      </Typography>

      <Typography variant="h3" color="text.primary">
        ₴100,044
      </Typography>
    </Box>
  );
};
