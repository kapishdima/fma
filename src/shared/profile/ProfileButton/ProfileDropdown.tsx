import React from 'react';

import { Typography, Box } from '@mui/material';
import { Dropdown, DropdownItem } from '../../dropdown/Dropdown';

type ProfileDropdownProps = {
  anchorEl: null | HTMLElement;
  opened: boolean;
  close: () => void;
};

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ anchorEl, opened, close }) => {
  const profileMenuItems: DropdownItem[] = [
    { title: 'Settings' },
    { title: 'Logout', variant: 'error.main' },
  ];
  const profileHeader = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle1">Kapish Dima</Typography>
      <Typography variant="body2">kapishdim@gmail.com</Typography>
    </Box>
  );

  return (
    <Dropdown
      items={profileMenuItems}
      header={profileHeader}
      anchorEl={anchorEl}
      opened={opened}
      onClose={close}
      onClick={close}
    />
  );
};
