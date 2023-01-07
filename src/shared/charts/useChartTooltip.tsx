import { useTheme } from '@mui/material';

export const useChartTooltip = () => {
  const theme = useTheme();

  const createTooltip = (value: number) => {
    return `
      <div
        style="
          border-radius: ${theme.spacing(1.5)};
          padding: ${theme.spacing(0.5)};
          background: ${theme.palette.grey[300]};
          color: ${theme.palette.primary.darker};
        ">
        <span style=" fontSize: 12px; fontWeight: 700; lineHeight: 18px ">₴${value}</span>
      </div>
    `;
  };

  return { createTooltip };
};
