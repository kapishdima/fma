import React from 'react';

import { Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { AppLayout } from 'shared/layout';

import { BalancePreview } from 'modules/balance';
import { ExpencesCard, ExpencesDetailsBox } from 'modules/expences';
import { IncomeCard } from 'modules/income';
import { CategoriesRow } from 'modules/categories';

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
          <Grid item xs={12} py={theme.spacing(2)}>
            <CategoriesRow />
          </Grid>
          <Grid item xs={12} py={theme.spacing(2)}>
            <ExpencesDetailsBox />
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
}

export default App;
