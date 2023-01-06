import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';

import { AppBar } from './AppBar';
import { Sidebar } from '../sidebar/Sidebar';

type AppLayoutProps = {
  children: JSX.Element;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item width={280}>
        <Sidebar />
      </Grid>
      <Grid item xs={9.5}>
        <Grid container>
          <AppBar />
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Box pt={theme.spacing(3)} px={theme.spacing(3)}>
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
