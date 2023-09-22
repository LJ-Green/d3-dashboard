// src/components/PieChart.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import pieChartData from '../data/pieChartData';

const PieChart = () => {
  // Fake data for the pie chart
  const data = pieChartData

  // Create a title for the chart
  const chartTitle = 'Sample Pie Chart';

  useEffect(() => {
    // Select the chart container
    const svg = d3.select('#pie-chart-container');

    // Define the chart dimensions
    const width = 400;
    const height = 300;

    // Create a color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create a pie generator
    const pie = d3.pie().value((d) => d.value);

    // Create an arc generator
    const arc = d3.arc().innerRadius(0).outerRadius(Math.min(width, height) / 2 - 10);

    // Create the chart container
    const chart = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create arcs for each data entry
    const arcs = chart.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    // Add arcs to the chart
    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data.label));

    // Create chart title
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', 30)
      .style('text-anchor', 'middle')
      .style('font-size', '18px')
      .text(chartTitle);
  }, []);

  return (
    <div className="chart">
      <svg id="pie-chart-container" width="500" height="400"></svg>
    </div>
  );
};

export default PieChart;
