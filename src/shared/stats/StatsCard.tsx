import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { useCountUp } from 'react-countup';

type StatsCardColor = 'primary' | 'success' | 'warning';

type StatsCardProps = {
  color: StatsCardColor;
  title: string;
  value: number;
  subtitle?: JSX.Element;
  extraIcon?: JSX.Element;
  footer?: JSX.Element;
};

export const StatsCard: React.FC<StatsCardProps> = ({
  color,
  title,
  subtitle,
  value,
  extraIcon,
  footer,
}) => {
  const id = `${Date.now()}_stat-value`;
  const theme = useTheme();
  useCountUp({ ref: id, end: value, prefix: '₴', duration: 0.8, separator: ',' });

  return (
    <Box
      sx={{
        position: 'relative',
        background: theme.palette[color].lighter,
        borderRadius: theme.spacing(2),
        overflow: 'hidden',
      }}>
      <Box sx={{ padding: theme.spacing(3) }}>
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
        <Typography variant="h3" color={`${color}.darker`} id={id}>
          {value}
        </Typography>
        {subtitle}
      </Box>
      <Box sx={{ flexGrow: 1 }}>{footer}</Box>
    </Box>
  );
};
