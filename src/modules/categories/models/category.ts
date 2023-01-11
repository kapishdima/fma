import { Palette } from '@mui/material';

export type CategoryRowItem = {
  amount: string;
  name: string;
  color: keyof Palette;
};
