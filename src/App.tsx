import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Router from './router/Router';

const App = () => {
  return (
    <BrowserRouter>
      <FullWrap>
        <Router />
      </FullWrap>
    </BrowserRouter>
  );
};

const FullWrap = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(237 242 244 / 90%);
`;

export default App;
