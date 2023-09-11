import axios from 'axios';

const MOCK_DATA_PATH = '/_mock/mockData.json';

export const getPlaceMockData = () => {
  return axios.get(MOCK_DATA_PATH);
};
