import { AppBar } from './AppBar';
import { Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';

type AppLayoutProps = {
  children: JSX.Element;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
