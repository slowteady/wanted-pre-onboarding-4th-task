import { Navigate, Route, Routes } from 'react-router-dom';
import ChartIndex from '../page/ChartIndex';

const Router = () => {
  return (
    <Routes>
      <Route path="/chart" element={<ChartIndex />} />
      <Route path="/*" element={<Navigate to="/chart" replace={true} />} />
    </Routes>
  );
};

export default Router;
