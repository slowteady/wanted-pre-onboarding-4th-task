import { TooltipProps } from 'recharts';
import styled from 'styled-components';
import location from '../../../icons/location.svg';

const CustomTooltip = ({ active, payload }: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    const [bar, area] = payload;

    return (
      <TooltipBox>
        <ImgTitleBox>
          <Img src={location} alt="location" />
          <P data-isvalue={false}>{bar.payload.id}</P>
        </ImgTitleBox>
        <ValueBox>
          <P data-isvalue>{`${bar.name}: ${bar.value}`}</P>
          <P data-isvalue>{`${area.name}: ${area.value}`}</P>
        </ValueBox>
      </TooltipBox>
    );
  }
  return null;
};

const TooltipBox = styled.div`
  width: 120px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const P = styled.p<{ 'data-isvalue': boolean }>`
  font-weight: bold;
  margin: 2px;
  font-size: ${(props) => (props['data-isvalue'] ? '14px' : '16px')};
  ${(props) => props['data-isvalue'] === false && 'border-bottom: 2px solid black;'}
`;

const ImgTitleBox = styled.div`
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ValueBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 5px;
`;

export default CustomTooltip;
