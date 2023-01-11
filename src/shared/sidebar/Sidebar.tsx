import React from 'react';
import { Box, Drawer, useTheme } from '@mui/material';

import { SideNavigation } from 'shared/navigation';
import { ProfilePreview } from 'modules/profile/ProfilePreview';

import Avatar from '../../assets/avatar.png';
import Logo from '../../assets/logo.svg';

export const Sidebar: React.FC = () => {
  const theme = useTheme();

  const drawerStyle = {
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 280,
      paddingY: theme.spacing(4),
      paddingX: theme.spacing(2),
      border: 'none',
    },
  };

  return (
    <Box height="100vh">
      <Drawer variant="permanent" anchor="left" sx={drawerStyle}>
        <Box width={140} marginBottom={theme.spacing(4)} marginLeft={theme.spacing(3)}>
          <img width="100%" src={Logo} alt="" />
        </Box>

        <ProfilePreview avatar={Avatar} name="KapishDima" secondText="dima@gmail.com" />

        <SideNavigation />
      </Drawer>
    </Box>
  );
};
