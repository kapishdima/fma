import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3366FF',
      light: '#84A9FF',
      lighter: '#CAFDF5',
      dark: '#1939B7',
      darker: '#091A7A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00AB55',
      light: '#5BE584',
      lighter: '#C8FACD',
      dark: '#007B55',
      darker: '#007B55',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#00B8D9',
      light: '#61F3F3',
      lighter: '#CAFDF5',
      dark: '#006C9C',
      darker: '#003768',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#36B37E',
      light: '#86E8AB',
      lighter: '#D8FBDE',
      dark: '#1B806A',
      darker: '#0A5554',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFAB00',
      light: '#FFD666',
      lighter: '#FFF5CC',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#212B36',
    },
    error: {
      main: '#FF5630',
      light: '#FFAC82',
      lighter: '#FFE9D5',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },
    grey: {
      '100': '#F9FAFB',
      '200': '#F4F6F8',
      '300': '#DFE3E8',
      '400': '#C4CDD5',
      '500': '#919EAB',
      '600': '#637381',
      '700': '#454F5B',
      '800': '#212B36',
      '900': '#161C24',
    },
    text: {
      primary: '#212B36',
      secondary: '#637381',
      disabled: '#919EAB',
    },
  },
  shadows: [
    'none',
    '0px 8px 16px rgba(0, 171, 85, 0.24)',
    '0px 8px 16px rgba(51, 102, 255, 0.24)',
    '0px 8px 16px rgba(0, 184, 217, 0.24)',
    '0px 8px 16px rgba(54, 179, 126, 0.24)',
    '0px 8px 16px rgba(255, 171, 0, 0.24)',
    '0px 8px 16px rgba(255, 86, 48, 0.24)',
    '0px 1px 2px rgba(145, 158, 171, 0.16)',
    '0px 4px 8px rgba(145, 158, 171, 0.16)',
    '0px 8px 16px rgba(145, 158, 171, 0.16)',
    '0px 12px 24px -4px rgba(145, 158, 171, 0.16)',
    '0px 16px 32px -4px rgba(145, 158, 171, 0.16)',
    '0px 20px 40px -4px rgba(145, 158, 171, 0.16)',
    '0px 24px 48px rgba(145, 158, 171, 0.16)',
    '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
    '-40px 40px 80px -8px rgba(145, 158, 171, 0.24)',
    '0px 0px 2px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  typography: {
    fontFamily: ['"Public Sans"', 'sans-serif'].join(','),
    h1: {
      fontSize: 64,
      fontWeight: 900,
      lineHeight: '80px',
    },
    h2: {
      fontSize: 48,
      fontWeight: 900,
      lineHeight: '64px',
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '48px',
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '36px',
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '30px',
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '28px',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '24px',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '22px',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '18px',
    },
  },
});
