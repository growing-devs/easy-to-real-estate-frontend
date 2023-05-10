/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type Data = {
  id: number;
  date: string;
  lower_avg_price: number;
  avg_price: number;
  upper_avg_price: number;
};

const Chart = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  const data: Data[] = [
    {
      id: 1,
      date: '2022-05-01',
      lower_avg_price: 490000,
      avg_price: 510000,
      upper_avg_price: 530000,
    },
    {
      id: 2,
      date: '2022-05-02',
      lower_avg_price: 480000,
      avg_price: 500000,
      upper_avg_price: 520000,
    },
    {
      id: 3,
      date: '2022-05-03',
      lower_avg_price: 510000,
      avg_price: 530000,
      upper_avg_price: 550000,
    },
    {
      id: 4,
      date: '2022-05-03',
      lower_avg_price: 350000,
      avg_price: 410000,
      upper_avg_price: 570000,
    },
  ];

  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const svg = d3.select(ref.current);
    const minY = d3.min(data, (d) => Math.min(d.lower_avg_price, d.avg_price, d.upper_avg_price));
    const maxY = d3.max(data, (d) => Math.max(d.lower_avg_price, d.avg_price, d.upper_avg_price));

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([margin.left, width + margin.left - margin.right])
      .padding(0.1);

    const y = d3
      .scaleSymlog()
      .domain([minY ? minY * 0.9 : 0, maxY ? maxY * 1.1 : 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const area = createArea(x, y);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    // Append areas
    appendArea(svg, data, area, 'blue');
    appendAxis(svg, xAxis, yAxis, height, margin);
    appendDots(svg, data, x, y);
  }, [data, height, margin, width]);

  return (
    <svg ref={ref} width={width} height={height}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

function createArea(x: d3.ScaleBand<string>, y: d3.ScaleSymLog<number, number>) {
  return d3
    .area<Data>()
    .curve(d3.curveMonotoneX)
    .x((d) => (x(d.date) ?? 0) + x.bandwidth() / 2)
    .y0((d) => y(Math.min(d.lower_avg_price, d.upper_avg_price)))
    .y1((d) => y(Math.max(d.lower_avg_price, d.upper_avg_price)));
}

function appendArea(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: Data[],
  area: d3.Area<Data>,
  color: string,
) {
  svg
    .append('path')
    .datum(data)
    .attr('fill', color)
    .attr('stroke', 'bluek') // add stroke color
    .attr('stroke-dasharray', '3 3') // add dashed line
    .attr('d', area);
}

function appendAxis(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  xAxis: d3.Axis<string>,
  yAxis: d3.Axis<d3.NumberValue>,
  height: number,
  margin: { top: number; right: number; bottom: number; left: number },
) {
  svg
    .append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(xAxis);

  svg
    .append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(yAxis)
    .append('text')
    .attr('class', 'axis-label')
    .attr('x', -margin.left)
    .attr('y', margin.top - 10)
    .attr('dy', '.71em')
    .style('text-anchor', 'start')
    .text('Price');
}

function appendDots(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: Data[],
  x: d3.ScaleBand<string>,
  y: d3.ScaleSymLog<number, number>,
) {
  svg
    .selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d) => (x(d.date) ?? 0) + x.bandwidth() / 2)
    .attr('cy', (d) => y(d.avg_price))
    .attr('r', 4)
    .attr('fill', '#007b6e')
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
}

export default Chart;
