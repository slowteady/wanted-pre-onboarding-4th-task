import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import { useFilter } from '../../state/FilterContext';
import { ChartObj } from '../../types/chartData';
import CustomTooltip from './custom/CustomTooltip';

const Chart = ({ data }: { data: ChartObj[] }) => {
  const { filterIds, setFilterIds } = useFilter();

  const addFilter = (event: CategoricalChartState | null) => {
    if (event && event.activePayload) {
      const barPayloadId = event.activePayload[0].payload.id;
      if (barPayloadId) {
        setFilterIds(
          filterIds.includes(barPayloadId)
            ? filterIds.filter((filterId) => filterId !== barPayloadId)
            : [...filterIds, barPayloadId]
        );
      }
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 80,
          right: 30,
          left: 30
        }}
        onClick={addFilter}
      >
        <XAxis dataKey="date" style={{ fontSize: '0.8rem' }} minTickGap={30} />
        <YAxis
          yAxisId="left"
          width={100}
          tickMargin={5}
          label={{ value: BAR_DATA_KEY, angle: 270, position: 'left' }}
          tickFormatter={(value) => parseFloat(value).toFixed(2)}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          width={100}
          tickMargin={5}
          domain={[0, 200]}
          label={{ value: AREA_DATA_KEY, angle: 90, position: 'right' }}
          tickFormatter={(value) => parseFloat(value).toFixed(2)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey={BAR_DATA_KEY} yAxisId="left" barSize={10} fill="#c5c5f2">
          {data.map((entry, index) => (
            <Cell key={index} fill={filterIds.includes(entry.id) ? '#5f5fac' : '#c5c5f2'} />
          ))}
        </Bar>
        <Area yAxisId="right" dataKey={AREA_DATA_KEY} fill="#b1b1bde4" stroke="#b1b1bde4" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const BAR_DATA_KEY = 'value_bar';
const AREA_DATA_KEY = 'value_area';

export default Chart;
