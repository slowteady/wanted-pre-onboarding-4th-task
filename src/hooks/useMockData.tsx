import { useEffect, useState } from 'react';
import { getPlaceMockData } from '../api/requestApi';
import { ChartData, ChartObj } from '../types/chartData';

const useMockData = () => {
  const [chartData, setChartData] = useState<ChartObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterArr, setFilterArr] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await getPlaceMockData();
        const { response } = res.data;

        if (res.status === 200 && Object.keys(response).length > 0) {
          const newArray = Object.entries(response).map(([date, data]) => ({ date, ...(data as ChartData) }));
          const uniqueIds = [...new Set(newArray.map((item) => item.id))];

          setChartData(newArray);
          setFilterArr(uniqueIds);
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

  return { chartData, filterArr, isLoading };
};

const ERROR_MESSAGES = '데이터 호출에 실패했습니다.';

export default useMockData;
