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

  return (
    <>
      <FilterBtnBox>
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

const Button = styled.button<{ 'data-isactive': boolean }>`
  padding: 8px 20px;
  margin: 0 3px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => (props['data-isactive'] ? '#0a68ce' : '#428edf')};
  border-radius: 6px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0a68ce;
  }
`;

export default FilterButtonList;
