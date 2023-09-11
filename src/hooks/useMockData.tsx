import { useEffect, useState } from 'react';
import { getPlaceMockData } from '../api/requestApi';
import { ChartObj, ChartObjParams } from '../types/chartData';

const useMockData = () => {
  const [chartData, setChartData] = useState<ChartObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await getPlaceMockData();
        const { response } = res.data;

        if (res.status === 200 && Object.keys(response).length > 0) {
          const newArray = changeFormat(response);
          setChartData(newArray);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          throw new Error();
        }
      } catch (err) {
        setIsLoading(false);
        const errorMessage = err instanceof Error ? `Error: ${err.message}` : ERROR_MESSAGES;
        alert(errorMessage);
      }
    };
    fetchData();
  }, []);

  return { chartData, isLoading };
};

const changeFormat = ({ ...data }: ChartObjParams) => {
  const newArray = Object.entries(data).map(([date, data]) => {
    return {
      date,
      ...data,
      value_area: data.value_area.toFixed(2),
      value_bar: data.value_bar.toFixed(2)
    };
  });

  return newArray;
};

const ERROR_MESSAGES = '데이터 호출에 실패했습니다.';

export default useMockData;
