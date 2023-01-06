import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

type StatsCardColor = 'primary' | 'success' | 'warning';

type StatsCardProps = {
  color: StatsCardColor;
  title: string;
  value: string;
  subtitle?: JSX.Element;
  extraIcon?: JSX.Element;
};

export const StatsCard: React.FC<StatsCardProps> = ({
  color,
  title,
  subtitle,
  value,
  extraIcon,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        background: theme.palette[color].lighter,
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
      }}>
      <Typography variant="subtitle2" color={`${color}.darker`}>
        {title}
      </Typography>
      {extraIcon && (
        <Box
          width={theme.spacing(6)}
          height={theme.spacing(6)}
          color={theme.palette[color].lighter}
          sx={{
            position: 'absolute',
            borderRadius: '100%',
            background: theme.palette[color].darker,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: theme.spacing(3),
            right: theme.spacing(3),
          }}>
          {extraIcon}
        </Box>
      )}
      <Typography variant="h3" color={`${color}.darker`}>
        ₴{value}
      </Typography>
      {subtitle}
    </Box>
  );
};
