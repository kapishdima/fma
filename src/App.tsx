import React from 'react';
import { Box, Card, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Typography variant="h1" color="primary">
        Heading 1
      </Typography>
      <Typography variant="h2" color="secondary">
        Heading 2
      </Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="overline">overline</Typography>

      <Box boxShadow={11}>123</Box>
    </>
  );
}

export default App;
