import React, { useContext } from 'react';
import { SelectedContext } from './SelectedContext';
import './Sidebar.css';

const Sidebar = () => {
  const { selectedItem, setSelectedItem, selectedTechnology, setSelectedTechnology, agentsByTechnology } = useContext(SelectedContext);

  const handleSelectTechnology = (technology) => {
    setSelectedTechnology(technology);
    setSelectedItem(null); // Clear selected agent when technology changes
  };

  const handleSelectAgent = (agent) => {
    setSelectedItem(agent);
  };

  return (
    <div className="sidebar">
      <h2>Choose an Agent</h2>
      <ul>
        <li 
          className={selectedTechnology === 'PDF Ai PDF' ? 'selected' : ''} 
          onClick={() => handleSelectTechnology('PDF Ai PDF')}
        >
          PDF Ai PDF
        </li>
        <li 
          className={selectedTechnology === 'Kraftful product coach' ? 'selected' : ''} 
          onClick={() => handleSelectTechnology('Kraftful product coach')}
        >
          Kraftful product coach
        </li>
        <li 
          className={selectedTechnology === 'Consensus' ? 'selected' : ''} 
          onClick={() => handleSelectTechnology('Consensus')}
        >
          Consensus
        </li>
      </ul>
      
      {selectedTechnology && (
        <div className="agents-list">
          <h3>Available Chats</h3>
          <ul>
            {agentsByTechnology[selectedTechnology]?.map(agent => (
              <li 
                key={agent}
                className={selectedItem === agent ? 'selected' : ''}
                onClick={() => handleSelectAgent(agent)}
              >
                {agent}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
