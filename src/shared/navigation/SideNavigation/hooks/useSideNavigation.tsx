import { useContext } from 'react';
import { SideNavigationContext } from '../provider/SideNavigationProvider';
import { SideNavigationItem } from '../SideNavigationItem';

export const useSideNavigation = () => {
  const sideNavigation = useContext(SideNavigationContext);

  if (!sideNavigation) {
    return null;
  }

  const withExtraNavigation = () => {
    const lastIndex = sideNavigation.items.length;
    const items = getSidenavigationItems();
    const extraItem = sideNavigation.extraItems(lastIndex || 0);

    items.push(extraItem);

    return items;
  };

  const getSidenavigationItems = () => {
    return sideNavigation.items.map((navigationItem, index) => (
      <SideNavigationItem {...navigationItem} index={index} />
    ));
  };

  return {
    getSidenavigationItems,
    withExtraNavigation,
  };
};
