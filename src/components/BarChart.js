// src/components/BarChart.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import barChartData from '../data/barChartData';

const BarChart = () => {
  // Fake data for the bar chart
  const data = barChartData;

  // Create a title for the chart
  const chartTitle = 'Sample Bar Chart';

  useEffect(() => {
    // Select the chart container
    const svg = d3.select('#bar-chart-container');

    // Define the chart dimensions
    const width = 400;
    const height = 300;

    // Create scales for the x and y axes
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create the chart container
    const chart = svg
      .append('g')
      .attr('transform', `translate(50, 10)`); // Adjust margins

    // Create and style the bars
    chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value))
      .style('fill', 'steelblue');

    // Create x-axis
    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Create y-axis
    chart
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));

    // Add chart title
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
      <svg id="bar-chart-container" width="500" height="400"></svg>
    </div>
  );
};

export default BarChart;
