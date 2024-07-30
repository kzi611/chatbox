import React, { useContext } from 'react';
import { SelectedContext } from './SelectedContext';
import './MainContent.css';

const MainContent = () => {
  const { selectedItem, selectedTechnology, setSelectedTechnology, addAgent, agentsByTechnology } = useContext(SelectedContext);

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
    addAgent(technology); 
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1>ChatGPT</h1>
      </div>
      <div className="content-body">
        {selectedItem ? (
          <form className="message-input">
            <input
              type="text"
              placeholder={`Type your message for ${selectedItem}...`}
            />
            <button type="submit">Send</button>
          </form>
        ) : (
          <div className="technology-options">
            <h2>Choose an Agent</h2>
            <ul>
              <li onClick={() => handleTechnologyClick('PDF Ai PDF')}>
                PDF Ai PDF
              </li>
              <li onClick={() => handleTechnologyClick('Kraftful product coach')}>
                Kraftful product coach
              </li>
              <li onClick={() => handleTechnologyClick('Consensus')}>
                Consensus
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
