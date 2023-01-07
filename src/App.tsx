import React from 'react';

import { Button, Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { BalancePreview } from './modules/balance/BalancePreview';
import { AppLayout } from './shared/layout/AppLayout';
import { ExpencesCard } from './modules/expences/ExpencesCard';
import { IncomeCard } from './modules/income/IcomeCard';
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';

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
            <Box mt={theme.spacing(1)} mb={theme.spacing(2)}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Categories</Typography>
                <Button
                  size="small"
                  variant="text"
                  endIcon={<AddIcon />}
                  sx={{
                    color: theme.palette.text.primary,
                    ...theme.typography.button,
                    textTransform: 'capitalize',
                  }}>
                  Create category
                </Button>
              </Box>
            </Box>
            <Grid container columnSpacing={1}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: theme.palette.success.lighter,
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(2),
                  }}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="success.darker">
                      20k
                    </Typography>
                    <Typography variant="subtitle2" color="success.darker">
                      Продукты
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: theme.palette.info.lighter,
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(2),
                  }}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="info.darker">
                      113.4k
                    </Typography>
                    <Typography variant="subtitle2" color="info.darker">
                      Покупки
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: theme.palette.error.lighter,
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(2),
                  }}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="error.darker">
                      76k
                    </Typography>
                    <Typography variant="subtitle2" color="error.darker">
                      Коммуналка
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: theme.palette.grey[200],
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(2),
                  }}>
                  <Box textAlign="center">
                    <Button
                      size="medium"
                      variant="text"
                      endIcon={<EastIcon />}
                      sx={{
                        color: theme.palette.text.primary,
                        ...theme.typography.button,
                        textTransform: 'capitalize',
                      }}>
                      Sea all
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
}

export default App;
