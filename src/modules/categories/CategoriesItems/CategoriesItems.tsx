import React from 'react';
import { Collapse, List } from '@mui/material';

import { SideNavigationItem } from '../../../shared/navigation/SideNavigation/SideNavigationItem';
import { useCategories } from './useCategories';
import { categoryItem } from '../../../app/router/navigation';
import { SideNavigationItemChild } from '../../../shared/navigation/SideNavigation/SideNavigationItemChild';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type CategoriesItemsProps = {
  index: number;
};

export const CategoriesItems: React.FC<CategoriesItemsProps> = ({ index }) => {
  const { opened, onClick } = useCategories();
  return (
    <>
      <SideNavigationItem
        {...categoryItem}
        index={index}
        onClick={onClick}
        iconAfter={opened ? <ExpandLess color="disabled" /> : <ExpandMore color="disabled" />}
      />
      <Collapse in={opened} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categoryItem.children?.map((child, key) => (
            <SideNavigationItemChild index={key + index + 1} {...child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
