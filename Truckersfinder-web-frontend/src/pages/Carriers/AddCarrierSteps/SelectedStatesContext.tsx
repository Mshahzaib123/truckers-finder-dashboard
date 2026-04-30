// SelectedStatesContext.ts

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your selected state
type SelectedState = string;

// Create a context
type SelectedStatesContextType = {
  selectedStates: SelectedState[];
  addState: (state: SelectedState) => void;
  removeState: (state: SelectedState) => void;
};

const SelectedStatesContext = createContext<SelectedStatesContextType | undefined>(undefined);

// Create a provider component
type SelectedStatesProviderProps = {
  children: ReactNode;
};

export const SelectedStatesProvider: React.FC<SelectedStatesProviderProps> = ({ children }) => {
   
  const [selectedStates, setSelectedStates] = useState<SelectedState[]>([]);

  // Define functions to add and remove states
  const addState = (state: SelectedState) => {
    setSelectedStates((prevSelected) => [...prevSelected, state]);
  };

  const removeState = (state: SelectedState) => {
    setSelectedStates((prevSelected) => prevSelected.filter((name) => name !== state));
  };

  return (
    <SelectedStatesContext.Provider value={{ selectedStates, addState, removeState }}>
      {children}
    </SelectedStatesContext.Provider>
  );
};

// Create a custom hook to use the context
export const useSelectedStates = (): SelectedStatesContextType => {
  const context = useContext(SelectedStatesContext);
  if (!context) {
    throw new Error('useSelectedStates must be used within a SelectedStatesProvider');
  }
  return context;
};
