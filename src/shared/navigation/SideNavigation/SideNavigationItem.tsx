import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

import { NavigationItem } from '../../../app/router/navigation';
import { useSideNavigation } from './useSideNavigation';

type SideNavigationItemProps = NavigationItem & {
  index: number;
};

export const SideNavigationItem: React.FC<SideNavigationItemProps> = ({
  title,
  path,
  Icon,
  index,
}) => {
  const theme = useTheme();
  const { isNavigationItemActive, handleNavigationItemClick } = useSideNavigation(index);

  return (
    <ListItemButton
      selected={isNavigationItemActive()}
      onClick={handleNavigationItemClick}
      sx={{
        borderRadius: theme.spacing(1),
      }}>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Icon color={isNavigationItemActive() ? 'primary' : 'disabled'} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: isNavigationItemActive() ? 'subtitle2' : 'body2',
          color: isNavigationItemActive()
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
        }}
      />
    </ListItemButton>
  );
};
