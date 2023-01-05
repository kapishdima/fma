import React from 'react';

import { List, ListSubheader, Typography } from '@mui/material';
import { sideNavigationItems } from '../../../app/router/navigation';
import { SideNavigationItem } from './SideNavigationItem';

export const SideNavigationList: React.FC = () => {
  return (
    <List
      subheader={
        <ListSubheader>
          <Typography variant="caption">GENERAL</Typography>
        </ListSubheader>
      }>
      {sideNavigationItems.map((navigationItem, index) => (
        <SideNavigationItem {...navigationItem} index={index} />
      ))}
    </List>
  );
};
