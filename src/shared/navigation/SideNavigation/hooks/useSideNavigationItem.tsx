import { useContext } from 'react';
import { SideNavigationContext } from '../provider/SideNavigationProvider';

export const useSideNavigationItem = (index: number) => {
  const sideNavigation = useContext(SideNavigationContext);

  const setSelected = () => {
    sideNavigation?.setActiveIndex(index);
  };

  const selected = sideNavigation?.activeIndex === index;

  return {
    setSelected,
    selected,
  };
};
