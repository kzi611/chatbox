import React from 'react';
import { SelectedProvider } from './components/SelectedContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <SelectedProvider>
      <div className="app">
        <Sidebar />
        <MainContent />
      </div>
    </SelectedProvider>
  );
};

export default App;
