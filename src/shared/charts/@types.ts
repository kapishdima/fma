import { ApexOptions } from 'apexcharts';

export type ChartBaseProps = {
  data: ApexOptions['series'];
  xAxisData: any[];
  colors?: string[];
  height?: string | number;
};
