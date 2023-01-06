import React from 'react';
import { Typography } from '@mui/material';
import { AppLayout } from './shared/layout/AppLayout';
import { Box } from '@mui/system';

function App() {
  return (
    <AppLayout>
      <Box>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
    </AppLayout>
  );
}

export default App;
