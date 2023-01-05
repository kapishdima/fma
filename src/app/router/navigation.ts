import { Routes } from './routes';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import DiamondIcon from '@mui/icons-material/Diamond';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';

export type NavigationItem = {
  title: string;
  key: string;
  path: string;
  Icon: any;
};

export const sideNavigationItems: NavigationItem[] = [
  { title: 'Dashboard', key: 'dashboard', path: Routes.DASHBOARD, Icon: DashboardIcon },
  { title: 'Expences', key: 'expences', path: Routes.EXPENCES, Icon: TrendingDownIcon },
  { title: 'Income', key: 'income', path: Routes.INCOME, Icon: TrendingUpIcon },
  { title: 'Goals', key: 'goals', path: Routes.GOALS, Icon: DiamondIcon },
  { title: 'Categories', key: 'categories', path: Routes.CATEGORIES, Icon: CategoryIcon },
];
