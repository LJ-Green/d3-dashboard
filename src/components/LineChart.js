// src/components/LineChart.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import lineChartData from '../data/lineChartData';

const LineChart = () => {
  // Fake data for the line chart
  const data = lineChartData; 

  // Create a title for the chart
  const chartTitle = 'Sample Line Chart';

  useEffect(() => {
    // Select the chart container
    const svg = d3.select('#line-chart-container');

    // Define the chart dimensions
    const width = 400;
    const height = 300;

    // Parse the dates
    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach((d) => {
      d.date = parseDate(d.date);
    });

    // Create scales for the x and y axes
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create a line generator
    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    // Create the chart container
    const chart = svg
      .append('g')
      .attr('transform', `translate(50, 10)`); // Adjust margins

    // Add the line path
    chart
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .style('fill', 'none')
      .style('stroke', 'steelblue');

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
      <svg id="line-chart-container" width="500" height="400"></svg>
    </div>
  );
};

export default LineChart;