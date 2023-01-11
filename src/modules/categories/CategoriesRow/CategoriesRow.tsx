import React from 'react';
import { Grid, Box, Typography, Button, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { CategoriesRowItem } from './CategoriesRowItem';
import { categories } from 'data';

export const CategoriesRow: React.FC = () => {
  const theme = useTheme();

  return (
    <>
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
        {categories.map((category) => (
          <Grid item xs={3}>
            <CategoriesRowItem {...category} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
