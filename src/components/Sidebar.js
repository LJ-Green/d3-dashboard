import React from 'react';

const Sidebar = ({ onChartClick, activeChart }) => {
  // Define your chart titles here, and make sure they match the identifiers in App.js
  const chartTitles = [
    "BarChart",
    "LineChart",
    "PieChart",
    // Add more chart titles for additional charts
  ];

  return (
    <div className="sidebar">
      <h2>Dashboard Sections</h2>
      <ul>
        {chartTitles.map((title, index) => (
          <li
            key={index}
            onClick={() => onChartClick(title)}
            className={activeChart === title ? 'active' : ''}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
