import React from 'react';

import { SideNavigationProvider } from './provider/SideNavigationProvider';
import { SideNavigationList } from './SideNavigationList';
import { sideNavigationItems } from '../../../app/router/navigation';
import { CategoriesItems } from '../../../modules/categories/CategoriesItems/CategoriesItems';

export const SideNavigation: React.FC = () => {
  const extraItem = (index: number) => <CategoriesItems index={index} />;

  return (
    <SideNavigationProvider items={sideNavigationItems} extraItems={extraItem}>
      <SideNavigationList />
    </SideNavigationProvider>
  );
};
