import React from 'react';

import { SideNavigationProvider } from './provider/SideNavigationProvider';
import { SideNavigationList } from './SideNavigationList';

export const SideNavigation: React.FC = () => {
  return (
    <SideNavigationProvider>
      <SideNavigationList />
    </SideNavigationProvider>
  );
};
