import { Routes } from './routes';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import DiamondIcon from '@mui/icons-material/Diamond';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';

export type NavigationItem = {
  title: string;
  path: string;
  Icon?: any;
  children?: NavigationItem[];
};

export const categoryItem: NavigationItem = {
  title: 'Categories',
  path: Routes.CATEGORIES,
  Icon: CategoryIcon,
  children: [
    { title: 'Продукты', path: Routes.CATEGORIES },
    { title: 'Подписки', path: Routes.CATEGORIES },
    { title: 'Проезд', path: Routes.CATEGORIES },
    { title: 'Посиделки вне дома', path: Routes.CATEGORIES },
    { title: 'Покупка', path: Routes.CATEGORIES },
    { title: 'Алкашка', path: Routes.CATEGORIES },
    { title: 'Сигареты', path: Routes.CATEGORIES },
    { title: 'Подарки', path: Routes.CATEGORIES },
    { title: 'Аренда', path: Routes.CATEGORIES },
    { title: 'Коммуналка', path: Routes.CATEGORIES },
  ],
};

export const sideNavigationItems: NavigationItem[] = [
  { title: 'Dashboard', path: Routes.DASHBOARD, Icon: DashboardIcon },
  { title: 'Expences', path: Routes.EXPENCES, Icon: TrendingDownIcon },
  { title: 'Income', path: Routes.INCOME, Icon: TrendingUpIcon },
  { title: 'Goals', path: Routes.GOALS, Icon: DiamondIcon },
];
