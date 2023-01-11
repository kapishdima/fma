import { MenuProps } from '@mui/material';

export type DropdownItem = {
  icon?: JSX.Element;
  children?: JSX.Element;
  title: string | JSX.Element;
  variant?: any;
};

export type DropdownProps = {
  anchorEl: MenuProps['anchorEl'];
  onClose: MenuProps['onClose'];
  onClick: MenuProps['onClick'];
  PaperProps?: MenuProps['PaperProps'];
  items: DropdownItem[];
  header?: JSX.Element;
  opened: boolean;
};
