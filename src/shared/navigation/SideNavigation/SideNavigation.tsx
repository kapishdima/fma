import React from 'react';

import { sideNavigationItems } from 'app/router/navigation';
import { CategoriesNavigationItems } from 'modules/categories';

import { SideNavigationProvider } from './provider/SideNavigationProvider';
import { SideNavigationList } from './SideNavigationList';

export const SideNavigation: React.FC = () => {
  const extraItem = (index: number) => <CategoriesNavigationItems index={index} />;

  return (
    <SideNavigationProvider items={sideNavigationItems} extraItems={extraItem}>
      <SideNavigationList />
    </SideNavigationProvider>
  );
};
