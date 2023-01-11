import React from 'react';
import { Box, PaletteColor, Typography, useTheme } from '@mui/material';
import { CategoryRowItem as TCategoryRowItem } from '../models/category';

type CategoriesRowItemProps = TCategoryRowItem & {};

export const CategoriesRowItem: React.FC<CategoriesRowItemProps> = (category) => {
  const theme = useTheme();
  const color = theme.palette[category.color] as PaletteColor;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: color.lighter,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
      }}>
      <Box textAlign="center">
        <Typography variant="h3" color={`${category.color}.darker`}>
          {category.amount}
        </Typography>
        <Typography variant="subtitle2" color={`${category.color}.darker`}>
          {category.name}
        </Typography>
      </Box>
    </Box>
  );
};
