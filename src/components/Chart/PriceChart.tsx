import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface ActualTransactionPrice {
  contract_date: string;
  transaction_type: string;
  price: number;
  floor: number;
  asking_price: number;
}

interface MarketPrice {
  reference_date: string;
  transaction_type: string;
  lower_avg_price: number;
  avg_price: number;
  upper_avg_price: number;
  sales_vs_rent_price: string;
}

interface Data {
  actualTransactionPrice: ActualTransactionPrice[];
  marketPrice: MarketPrice[];
}

const Chart = ({ actualTransactionPrice, marketPrice }: Data) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const margin = { top: 20, right: 20, bottom: 10, left: 50 };
  const width = 480 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const svg = d3.select(ref.current);
    const marketPrices = marketPrice.map((item) => item.lower_avg_price);
    const transactionPrices = actualTransactionPrice.map((item) => item.price);
    const minPrice = Math.min(...marketPrices, ...transactionPrices);
    const maxPrice = Math.max(
      ...actualTransactionPrice.map((d) => d.price),
      ...marketPrice.map((d) => d.upper_avg_price),
    );

    const x = d3
      .scaleBand()
      .domain(marketPrice.map((d) => d.reference_date))
      .range([margin.left, width + margin.left - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([minPrice ? minPrice * 0.9 : 0, maxPrice ? maxPrice * 1.1 : 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const area = d3
      .area<MarketPrice>()
      .curve(d3.curveStep)
      .x((d) => (x(d.reference_date) ?? 0) + x.bandwidth() / 2)
      .y0((d) => y(Math.min(d.lower_avg_price, d.upper_avg_price)))
      .y1((d) => y(Math.max(d.lower_avg_price, d.upper_avg_price)));

    const xAxis = d3.axisBottom(x);
    const yAxis = d3
      .axisLeft(y)
      .tickSize(-width) // 이 부분을 추가합니다. tickSize는 그리드 라인의 길이를 결정합니다.
      .tickFormat(d3.format('.2s')); // 이것은 선택 사항이며, 틱 레이블의 형식을 지정합니다.

    const xActual = d3
      .scaleBand()
      .domain(actualTransactionPrice.map((d) => d.contract_date))
      .range([margin.left, width + margin.left - margin.right])
      .padding(0.1);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove()) // 이 부분은 Y축의 선을 제거합니다.
      .call(
        (g) =>
          g
            .selectAll('.tick line') // 이 부분은 그리드 라인의 스타일을 지정합니다.
            .attr('stroke', '#ddd'), // 회색으로 설정
      ) // 점선으로 설정
      .append('text')
      .attr('class', 'axis-label')
      .attr('x', -margin.left)
      .attr('y', margin.top - 10)
      .attr('dy', '.71em')
      .style('text-anchor', 'start')
      .text('Price');

    svg
      .append('path')
      .datum(marketPrice)
      .attr('fill', '#E8EAF6')
      .attr('stroke', '#1A237E')
      .attr('stroke-dasharray', '3 3')
      .attr('d', area);
    svg
      .selectAll('.dot')
      .data(actualTransactionPrice)
      .join('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => (xActual(d.contract_date) ?? 0) + xActual.bandwidth() / 2)
      .attr('cy', (d) => y(d.price))
      .attr('r', 4)
      .attr('fill', '#fd3c19')
      .attr('stroke', '#fd3b19c0')
      .attr('stroke-width', 2);
  }, [actualTransactionPrice, marketPrice, height, margin, width]);
  return (
    <div>
      <svg
        ref={ref}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default Chart;
