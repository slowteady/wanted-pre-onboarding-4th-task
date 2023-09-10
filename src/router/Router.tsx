import { Navigate, Route, Routes } from 'react-router-dom';
import ChartPage from '../page/ChartPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/chart" element={<ChartPage />} />
      <Route path="/*" element={<Navigate to="/chart" replace={true} />} />
    </Routes>
  );
};

export default Router;
