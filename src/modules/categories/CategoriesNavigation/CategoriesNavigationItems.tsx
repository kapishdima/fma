import React from 'react';
import { Collapse, List } from '@mui/material';

import { categoryItem } from 'app/router/navigation';
import { SideNavigationItem, SideNavigationItemChild } from 'shared/navigation';

import { useCategories } from './useCategories';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type CategoriesNavigationItemsProps = {
  index: number;
};

export const CategoriesNavigationItems: React.FC<CategoriesNavigationItemsProps> = ({ index }) => {
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
