export interface ChartData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface ChartObj extends ChartData {
  date: string;
}
