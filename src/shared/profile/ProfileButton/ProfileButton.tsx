import React from 'react';

import { IconButton, Avatar } from '@mui/material';
import { ProfileDropdown } from './ProfileDropdown';

import AvatarIcon from '../../../assets/avatar.png';

export const ProfileButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const opened = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={opened ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opened ? 'true' : undefined}>
        <Avatar src={AvatarIcon}></Avatar>
      </IconButton>

      <ProfileDropdown anchorEl={anchorEl} opened={opened} close={close} />
    </>
  );
};
