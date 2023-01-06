import React, { createContext, useState } from 'react';
import { NavigationItem } from '../../../../app/router/navigation';

type SetActiveIndex = (index: number) => void;
type ExtraItems = (index: number) => JSX.Element;

type SideNavigationContextValue = {
  activeIndex: number;
  setActiveIndex: SetActiveIndex;
  items: NavigationItem[];
  extraItems: ExtraItems;
};

type SideNavigationProviderProps = {
  children: JSX.Element;
  items: NavigationItem[];
  extraItems: ExtraItems;
};

export const SideNavigationContext = createContext<SideNavigationContextValue | null>(null);

export const SideNavigationProvider: React.FC<SideNavigationProviderProps> = ({
  children,
  items,
  extraItems,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SideNavigationContext.Provider value={{ activeIndex, setActiveIndex, items, extraItems }}>
      {children}
    </SideNavigationContext.Provider>
  );
};
