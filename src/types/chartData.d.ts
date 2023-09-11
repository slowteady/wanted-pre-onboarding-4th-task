export interface ChartData {
  id: string;
  value_area: string;
  value_bar: string;
}

export interface ChartObj extends ChartData {
  date: string;
}
