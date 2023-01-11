import { Box, Grid, Avatar, Typography, useTheme } from '@mui/material';
import React from 'react';

type ProfilePreviewProps = {
  avatar: string;
  name: string;
  secondText?: string;
};

export const ProfilePreview: React.FC<ProfilePreviewProps> = ({ avatar, name, secondText }) => {
  const theme = useTheme();
  const previewBoxStyle = {
    marginBottom: theme.spacing(5),
    paddingX: theme.spacing(2.5),
    paddingY: theme.spacing(2),
    background: theme.palette.grey[100],
    borderRadius: theme.spacing(1.5),
    cursor: 'pointer',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    transition: '.5s ease border-color',
    '&:hover': {
      borderColor: theme.palette.grey[200],
    },
  };

  return (
    <Box sx={previewBoxStyle}>
      <Grid container columnSpacing={2}>
        <Grid item>
          <Avatar src={avatar} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {secondText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
