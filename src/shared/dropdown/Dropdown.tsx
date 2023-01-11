import React from 'react';
import { Box, Divider, Menu, MenuItem, Theme, Typography, useTheme } from '@mui/material';
import { DropdownProps } from './@types';

const createHeader = (theme: Theme, header?: JSX.Element) => {
  if (!header) {
    return null;
  }

  return (
    <Box marginBottom={theme.spacing(1)}>
      <Box sx={{ px: theme.spacing(2), py: theme.spacing(1) }}>{header}</Box>
      <Divider />
    </Box>
  );
};

const createTitle = (title: string | JSX.Element, variant?: any) => {
  if (typeof title === 'string') {
    return (
      <Typography color={variant} variant="body2">
        {title}
      </Typography>
    );
  }

  return title;
};

const createCorner = () => {
  return {
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  };
};

const createMenuItemStyle = (theme: Theme) => {
  return {
    borderRadius: theme.spacing(1),
  };
};

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { anchorEl, onClose, onClick, PaperProps, items, opened, header } = props;
  const theme = useTheme();

  const paperStyle = {
    overflow: 'visible',
    borderRadius: theme.spacing(1),
    boxShadow:
      '0px 0px 2px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
    mt: 1.5,
    px: theme.spacing(1),
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    ...createCorner(),
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={opened}
      onClose={onClose}
      onClick={onClick}
      PaperProps={{
        ...PaperProps,
        elevation: 0,
        sx: paperStyle,
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      {createHeader(theme, header)}
      {items.map(({ icon, title, children, variant }) => {
        return (
          <MenuItem sx={createMenuItemStyle(theme)}>
            {children ? children : null}
            {icon ? icon : null} {createTitle(title, variant)}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
