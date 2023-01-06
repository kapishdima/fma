import React from 'react';

import { Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { BalancePreview } from './modules/balance/BalancePreview';
import { AppLayout } from './shared/layout/AppLayout';
import { ExpencesCard } from './modules/expences/ExpencesCard';
import { IncomeCard } from './modules/income/IcomeCard';
function App() {
  const theme = useTheme();
  return (
    <AppLayout>
      <Box>
        <Typography variant="h3" mb={theme.spacing(4)}>
          Hi, KapishDima 👋
        </Typography>
        <Grid container columnGap={2}>
          <Grid item xs={3.5}>
            <BalancePreview />
          </Grid>
          <Grid item xs={4}>
            <IncomeCard />
          </Grid>
          <Grid item xs={4}>
            <ExpencesCard />
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
}

export default App;
