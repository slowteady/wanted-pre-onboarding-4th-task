import styled from 'styled-components';
import Chart from '../components/charts/Chart';
import Loading from '../components/common/Loading';
import FilterButtonList from '../components/filter/FilterButtonList';
import useMockData from '../hooks/useMockData';
import { FilterProvider } from '../state/FilterContext';

const ChartIndex = () => {
  const { chartData, filterArr, isLoading } = useMockData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FilterProvider>
      <FilterBox>
        <FilterButtonList filterArr={filterArr} />
      </FilterBox>
      <ChartBox>
        <Chart data={chartData} />
      </ChartBox>
    </FilterProvider>
  );
};

const ChartBox = styled.section`
  height: 600px;
  width: 1200px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FilterBox = styled.section`
  height: 70px;
  width: 1200px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export default ChartIndex;
