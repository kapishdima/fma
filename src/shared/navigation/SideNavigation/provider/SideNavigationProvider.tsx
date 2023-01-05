import React, { createContext, useState } from 'react';

type SideNavigationProviderProps = {
  children: JSX.Element;
};

type SetActiveIndex = (index: number) => void;

type SideNavigationContextValue = {
  activeIndex: number;
  setActiveIndex: SetActiveIndex;
};

export const SideNavigationContext = createContext<SideNavigationContextValue | null>(null);

export const SideNavigationProvider: React.FC<SideNavigationProviderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SideNavigationContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </SideNavigationContext.Provider>
  );
};
