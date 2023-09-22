import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  const [activeChart, setActiveChart] = useState(null);

  const handleChartClick = (chartName) => {
    setActiveChart(chartName);
  };

  return (
    <div className="dashboard">
      <Sidebar onChartClick={handleChartClick} activeChart={activeChart} />
      <div className="section">
        {activeChart === 'BarChart' && <BarChart />}
        {activeChart === 'LineChart' && <LineChart />}
        {activeChart === 'PieChart' && <PieChart />}
        {/* Add more sections for additional charts */}
      </div>
    </div>
  );
}

export default App;
