export interface ChartData {
  id: string;
  value_area: string;
  value_bar: string;
}

export interface ChartObj extends ChartData {
  date: string;
}

export interface ChangeFormatChartData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface ChartObjParams {
  [key: string]: ChangeFormatChartData;
}
