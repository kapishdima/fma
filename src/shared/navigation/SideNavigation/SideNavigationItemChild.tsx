import React from 'react';

import { ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { useSideNavigationItem } from './hooks/useSideNavigationItem';
import { NavigationItem } from '../../../app/router/navigation';

type SideNavigationItemChildProps = NavigationItem & {
  index: number;
};

export const SideNavigationItemChild: React.FC<SideNavigationItemChildProps> = ({
  title,
  path,
  index,
}) => {
  const { selected, setSelected } = useSideNavigationItem(index);
  const theme = useTheme();
  return (
    <ListItemButton
      selected={selected}
      onClick={setSelected}
      sx={{
        borderRadius: theme.spacing(1),
      }}>
      <ListItemIcon sx={{ minWidth: 40 }} />
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
