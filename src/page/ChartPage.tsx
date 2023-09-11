import styled from 'styled-components';
import Chart from '../components/charts/Chart';
import Loading from '../components/common/Loading';
import useMockData from '../hooks/useMockData';

const ChartPage = () => {
  const { chartData, isLoading } = useMockData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChartBox>
      <Chart data={chartData} />
    </ChartBox>
  );
};

const ChartBox = styled.div`
  height: 600px;
  width: 1200px;
`;

export default ChartPage;
