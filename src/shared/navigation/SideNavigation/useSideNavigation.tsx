import { useContext } from 'react';
import { SideNavigationContext } from './provider/SideNavigationProvider';

export const useSideNavigation = (index: number) => {
  const sideNavigation = useContext(SideNavigationContext);

  const handleNavigationItemClick = () => {
    sideNavigation?.setActiveIndex(index);
  };

  const isNavigationItemActive = () => sideNavigation?.activeIndex === index;

  return {
    handleNavigationItemClick,
    isNavigationItemActive,
  };
};
