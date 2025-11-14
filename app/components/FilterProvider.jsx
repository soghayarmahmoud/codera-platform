"use client";
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <FilterContext.Provider value={{ selectedTech, setSelectedTech, searchTerm, setSearchTerm }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilter must be used within FilterProvider');
  return ctx;
}

export default FilterProvider;
