import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

import { NavigationItem } from '../../../app/router/navigation';
import { useSideNavigationItem } from './hooks/useSideNavigationItem';

type SideNavigationItemProps = NavigationItem & {
  index: number;
  onClick?: () => void;
};

export const SideNavigationItem: React.FC<SideNavigationItemProps> = ({
  title,
  path,
  Icon,
  index,
  onClick,
}) => {
  const { setSelected, selected } = useSideNavigationItem(index);
  const theme = useTheme();

  return (
    <ListItemButton
      selected={selected}
      onClick={onClick || setSelected}
      sx={{
        borderRadius: theme.spacing(1),
      }}>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Icon color={selected ? 'primary' : 'disabled'} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: selected ? 'subtitle2' : 'body2',
          color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
        }}
      />
    </ListItemButton>
  );
};
