import React, { createContext, useState } from 'react';

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [agentsByTechnology, setAgentsByTechnology] = useState({
    'PDF Ai PDF': [],
    'Kraftful product coach': [],
    'Consensus': [],
  });

  const addAgent = (technology) => {
    // Create a new agent with a unique name based on the current time
    const newAgent = `${technology} Agent ${Date.now()}`;
    setAgentsByTechnology(prev => ({
      ...prev,
      [technology]: [...(prev[technology] || []), newAgent]
    }));
  };

  return (
    <SelectedContext.Provider 
      value={{ 
        selectedItem, 
        setSelectedItem, 
        selectedTechnology, 
        setSelectedTechnology, 
        agentsByTechnology, 
        addAgent 
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};
