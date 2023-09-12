import { createContext, useContext, useState } from 'react';

export interface ChildrenProps {
  children: React.ReactNode;
}

interface FilterContextType {
  filterIds: string[];
  setFilterIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: ChildrenProps) => {
  const [filterIds, setFilterIds] = useState<string[]>([]);

  return <FilterContext.Provider value={{ filterIds, setFilterIds }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Cannot find FilterProvider');
  }
  return context;
};
