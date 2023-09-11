import Chart from '../components/charts/Chart';
import Loading from '../components/common/Loading';
import useMockData from '../hooks/useMockData';

const ChartPage = () => {
  const { chartData, isLoading } = useMockData();

  if (isLoading) {
    return <Loading />;
  }

  return <Chart data={chartData} />;
};

export default ChartPage;
