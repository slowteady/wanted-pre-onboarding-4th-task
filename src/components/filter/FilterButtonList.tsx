import styled from 'styled-components';
import { useFilter } from '../../state/FilterContext';

interface FilterButtonListProps {
  filterArr: string[];
}

const FilterButtonList = ({ filterArr }: FilterButtonListProps) => {
  const { filterIds, setFilterIds } = useFilter();

  const activeToggle = (id: string) => {
    if (filterIds.includes(id)) {
      setFilterIds(filterIds.filter((filterId) => filterId !== id));
    } else {
      setFilterIds([...filterIds, id]);
    }
  };

  const resetFilter = () => {
    setFilterIds([]);
  };

  return (
    <>
      <FilterBtnBox>
        <Button data-isactive={false} isReset onClick={resetFilter}>
          초기화
        </Button>
        {filterArr &&
          filterArr.length > 0 &&
          filterArr.map((id, index) => (
            <Button key={id} data-isactive={filterIds.includes(id)} onClick={() => activeToggle(id)}>
              {filterArr[index]}
            </Button>
          ))}
      </FilterBtnBox>
    </>
  );
};

const FilterBtnBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ 'data-isactive': boolean; isReset?: boolean }>`
  padding: 8px 20px;
  margin: 0 3px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => (props.isReset ? '#86868e' : props['data-isactive'] ? '#0a68ce' : '#428edf')};
  border-radius: 6px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isReset ? '#626268' : '#0a68ce')};
  }

  ${(props) => props.isReset && 'margin-right: 30px;'}
`;

export default FilterButtonList;
