import { Area, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartObj } from '../../types/chartData';
import CustomTooltip from './custom/CustomTooltip';

const Chart = ({ data }: { data: ChartObj[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 80,
          right: 30,
          left: 30
        }}
      >
        <XAxis dataKey="date" style={{ fontSize: '0.8rem' }} minTickGap={30} />
        <YAxis
          yAxisId="left"
          width={100}
          tickMargin={5}
          label={{ value: 'value_bar', angle: 270, position: 'left' }}
          tickFormatter={(value) => parseFloat(value).toFixed(2)}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          width={100}
          tickMargin={5}
          domain={[0, 200]}
          label={{ value: 'value_area', angle: 90, position: 'right' }}
          tickFormatter={(value) => parseFloat(value).toFixed(2)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value_bar" yAxisId="left" barSize={10} fill="#ababd2" />
        <Area yAxisId="right" dataKey="value_area" fill="#8884d8" stroke="#8884d8" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
