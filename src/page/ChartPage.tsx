import AreaCharts from '../components/graph/AreaCharts';
import useMockData from '../hooks/useMockData';

const ChartPage = () => {
  const { chartData, isLoading } = useMockData();
  
  return <AreaCharts />;
}

export default ChartPage;
