import React from 'react';
import { Grid, Toolbar, Typography, Box, useTheme } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import { ProfileButton } from '../profile/ProfileButton/ProfileButton';

export const AppBar = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12}>
      <Toolbar
        sx={{
          paddingY: theme.spacing(2),
        }}>
        <Box width="100%">
          <Grid container xs={5}>
            <Grid
              item
              sx={{
                flexGrow: 1,
              }}>
              <Typography variant="caption" color="text.secondary">
                Expences
              </Typography>
              <Typography variant="h4">₴20,534</Typography>
              <Box display="flex" columnGap={theme.spacing(0.5)} color={'error.main'}>
                <TrendingUpIcon fontSize="small" />
                <Typography variant="subtitle2">+20,534</Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                flexGrow: 1,
              }}>
              <Typography variant="caption" color="text.secondary">
                Income
              </Typography>
              <Typography variant="h4">₴210,234</Typography>
              <Box display="flex" columnGap={theme.spacing(0.5)} color={'success.main'}>
                <TrendingUpIcon fontSize="small" />
                <Typography variant="subtitle2">+50,534</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <ProfileButton />
      </Toolbar>
    </Grid>
  );
};
