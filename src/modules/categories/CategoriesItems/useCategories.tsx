import React from 'react';

export const useCategories = () => {
  const [opened, setOpened] = React.useState(false);

  const onClick = () => {
    setOpened(!opened);
  };

  return {
    opened,
    onClick,
  };
};
