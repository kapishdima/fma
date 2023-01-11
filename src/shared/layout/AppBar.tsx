import React from 'react';
import { Grid, Toolbar, Box, useTheme } from '@mui/material';

import { ProfileButton } from 'modules/profile';

export const AppBar = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12}>
      <Toolbar
        sx={{
          borderBottom: `1px solid ${theme.palette.grey[100]}`,
        }}>
        <Box sx={{ flexGrow: 1 }}></Box>
        <ProfileButton />
      </Toolbar>
    </Grid>
  );
};
