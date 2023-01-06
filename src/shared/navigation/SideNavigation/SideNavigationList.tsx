import React from 'react';

import { Box, List, Typography, useTheme } from '@mui/material';
import { useSideNavigation } from './hooks/useSideNavigation';

type SideNavigationListProps = {};

export const SideNavigationList: React.FC<SideNavigationListProps> = () => {
  const sideNavigation = useSideNavigation();
  const theme = useTheme();

  return (
    <List
      subheader={
        <Box pl={theme.spacing(2)} mb={theme.spacing(1)}>
          <Typography variant="caption" color="text.disabled">
            GENERAL
          </Typography>
        </Box>
      }>
      {sideNavigation?.withExtraNavigation()}
    </List>
  );
};
