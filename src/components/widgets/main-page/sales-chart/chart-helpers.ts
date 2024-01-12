// @ts-ignore
import * as d3 from 'd3';
import { ChartMeasure, ChartType, TimeRange } from './chart-model';
import {
	currentWeekNumberOfSellsMockData,
	currentWeekRotationMockData,
	previousWeekNumberOfSellsMockData,
	previousWeekRotationMockData,
	todayNumberOfSellsMockData,
	todayRotationMockData,
	twoWeekNumberOfSellsMockData,
	twoWeekRotationMockData,
	yesterDayNumberOfSells,
	yesterdayRotationMockData
} from './mock-chart-data';

const width: number = 550;
const height: number = 250;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

export const createLastPeriodBarPlot = (dataSets: any[], chartRef: any) => {
	d3.select(chartRef.current).selectAll('*').remove();

	const svg = d3
		.select(chartRef.current)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const colorScale = d3.scaleOrdinal().range(['#C0A6FF', '#FFA000']);

	const xScale = d3
		.scaleBand()
		.domain(dataSets[0].map((d: any) => d.time))
		.range([0, width - margin.left - margin.right])
		.padding(0.1);

	const yScale = d3
		.scaleLinear()
		.domain([
			0,
			d3.max(dataSets, (dataset: any) => d3.max(dataset, (d: { value: any }) => d.value))
		])
		.range([height - margin.top - margin.bottom, 0]);

	const xAxis = d3.axisBottom(xScale);
	const yAxis = d3.axisLeft(yScale);

	svg
		.append('g')
		.attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
		.call(xAxis);

	svg.append('g').call(yAxis);

	dataSets.forEach((data, i) => {
		const color = colorScale(i);

		svg
			.selectAll(`.bar-set-${i}`)
			.data(data)
			.enter()
			.append('rect')
			.attr('class', `bar-set-${i}`)
			.attr('x', (d: { time: any }) => xScale(d.time) + i * (xScale.bandwidth() / dataSets.length))
			.attr('y', (d: { value: any }) => yScale(d.value))
			.attr('width', xScale.bandwidth() / dataSets.length)
			.attr('height', (d: { value: any }) => height - margin.top - margin.bottom - yScale(d.value))
			.attr('fill', color);
	});
};

export const createPreviousLinePlot = (dataSets: any[], chartRef: any) => {
	d3.select(chartRef.current).selectAll('*').remove();

	const svg = d3
		.select(chartRef.current)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const colorScale = d3.scaleOrdinal().range(['#C0A6FF', '#FFA000']);

	const xScale = d3
		.scalePoint()
		.domain(dataSets[0].map((d: any) => d.time))
		.range([0, width - margin.left - margin.right]);

	const yScale = d3
		.scaleLinear()
		.domain([
			0,
			d3.max(dataSets, (dataset: any) => d3.max(dataset, (d: { value: any }) => d.value))
		])
		.range([height - margin.top - margin.bottom, 0]);

	const lineGenerator = d3
		.line()
		.x((d: { time: any }) => xScale(d.time))
		.y((d: { value: any }) => yScale(d.value));

	const xAxis = d3.axisBottom(xScale);
	const yAxis = d3.axisLeft(yScale);

	svg
		.append('g')
		.attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
		.call(xAxis);

	svg.append('g').call(yAxis);

	dataSets.forEach((data, i) => {
		const color = colorScale(i);

		svg
			.append('path')
			.datum(data)
			.attr('class', `line-set-${i}`)
			.attr('fill', 'none')
			.attr('stroke', color)
			.attr('stroke-width', 2)
			.attr('d', lineGenerator);
	});
};

export const createBarPlot = (data: any, chartRef: any) => {
	d3.select(chartRef.current).selectAll('*').remove();

	const svg = d3
		.select(chartRef.current)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const colorScale = d3
		.scaleOrdinal()
		.domain(data.map((d: any, i: any) => i))
		.range(['#C0A6FF', '#7F66E7']);

	const xScale = d3
		.scaleBand()
		.domain(data.map((d: any) => d.time))
		.range([0, width - margin.left - margin.right])
		.padding(0);

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d: { value: any }) => d.value)])
		.range([height - margin.top - margin.bottom, 0]);

	const xAxis = d3.axisBottom(xScale);
	const yAxis = d3.axisLeft(yScale);

	svg
		.append('g')
		.attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
		.call(xAxis);

	svg.append('g').call(yAxis);

	svg
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('x', (d: { time: any }) => xScale(d.time))
		.attr('y', (d: { value: any }) => yScale(d.value))
		.attr('width', xScale.bandwidth())
		.attr('height', (d: { value: any }) => height - margin.top - margin.bottom - yScale(d.value))
		.attr('fill', colorScale);
};

export const createLinePlot = (data: any, chartRef: any) => {
	d3.select(chartRef.current).selectAll('*').remove();

	const svg = d3
		.select(chartRef.current)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const xScale = d3
		.scalePoint()
		.domain(data.map((d: any) => d.time))
		.range([0, width - margin.left - margin.right]);

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d: { value: any }) => d.value)])
		.range([height - margin.top - margin.bottom, 0]);

	const line = d3
		.line()
		.x((d: any) => xScale(d.time))
		.y((d: any) => yScale(d.value));

	const colorScale = d3
		.scaleOrdinal()
		.domain(data.map((d: any, i: any) => i))
		.range(['#7F66E7']);

	const xAxis = d3.axisBottom(xScale);
	const yAxis = d3.axisLeft(yScale);

	svg
		.append('g')
		.attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
		.call(xAxis);

	svg.append('g').call(yAxis);

	svg
		.append('path')
		.datum(data)
		.attr('fill', 'none')
		.attr('stroke', colorScale(0))
		.attr('stroke-width', 2)
		.attr('d', line);
};

export const updateChart: (
	measure: ChartMeasure,
	timeRange: TimeRange,
	chartType: ChartType,
	showPrevious: boolean,
	chartRef: any
) => void = (measure, timeRange, chartType, showPrevious: boolean, chartRef: any) => {
	if (chartType === 'Bar') {
		switch (timeRange) {
			case 'Today':
				switch (measure) {
					case 'Rotation':
						if (!showPrevious) {
							createBarPlot(todayRotationMockData, chartRef);
						} else {
							createLastPeriodBarPlot([todayRotationMockData, yesterdayRotationMockData], chartRef);
						}
						break;
					case 'NumberOfSells':
						if (!showPrevious) {
							createBarPlot(todayNumberOfSellsMockData, chartRef);
						} else {
							createLastPeriodBarPlot(
								[todayNumberOfSellsMockData, yesterDayNumberOfSells],
								chartRef
							);
						}
				}
				break;
			case 'CurrentWeek':
				switch (measure) {
					case 'Rotation':
						if (!showPrevious) {
							createBarPlot(currentWeekRotationMockData, chartRef);
						} else {
							createLastPeriodBarPlot(
								[currentWeekRotationMockData, previousWeekRotationMockData],
								chartRef
							);
						}

						break;
					case 'NumberOfSells':
						if (!showPrevious) {
							createBarPlot(currentWeekNumberOfSellsMockData, chartRef);
						} else {
							createLastPeriodBarPlot(
								[currentWeekNumberOfSellsMockData, previousWeekNumberOfSellsMockData],
								chartRef
							);
						}
				}
				break;
			case 'PreviousWeek':
				switch (measure) {
					case 'Rotation':
						if (!showPrevious) {
							createBarPlot(previousWeekRotationMockData, chartRef);
						} else {
							createLastPeriodBarPlot(
								[previousWeekRotationMockData, twoWeekRotationMockData],
								chartRef
							);
						}
						break;
					case 'NumberOfSells':
						if (!showPrevious) {
							createBarPlot(previousWeekNumberOfSellsMockData, chartRef);
						} else {
							createLastPeriodBarPlot(
								[previousWeekNumberOfSellsMockData, twoWeekNumberOfSellsMockData],
								chartRef
							);
						}
				}
				break;
		}

		return;
	}

	switch (timeRange) {
		case 'Today':
			switch (measure) {
				case 'Rotation':
					if (!showPrevious) {
						createLinePlot(todayRotationMockData, chartRef);
					} else {
						createPreviousLinePlot([todayRotationMockData, yesterdayRotationMockData], chartRef);
					}

					break;
				case 'NumberOfSells':
					if (!showPrevious) {
						createLinePlot(todayNumberOfSellsMockData, chartRef);
					} else {
						createPreviousLinePlot([todayNumberOfSellsMockData, yesterDayNumberOfSells], chartRef);
					}
			}
			break;
		case 'CurrentWeek':
			switch (measure) {
				case 'Rotation':
					if (!showPrevious) {
						createLinePlot(currentWeekRotationMockData, chartRef);
					} else {
						createPreviousLinePlot(
							[currentWeekRotationMockData, previousWeekRotationMockData],
							chartRef
						);
					}
					break;
				case 'NumberOfSells':
					if (!showPrevious) {
						createLinePlot(currentWeekNumberOfSellsMockData, chartRef);
					} else {
						createPreviousLinePlot(
							[currentWeekNumberOfSellsMockData, previousWeekNumberOfSellsMockData],
							chartRef
						);
					}
			}
			break;
		case 'PreviousWeek':
			switch (measure) {
				case 'Rotation':
					if (!showPrevious) {
						createLinePlot(previousWeekRotationMockData, chartRef);
					} else {
						createPreviousLinePlot(
							[previousWeekRotationMockData, twoWeekRotationMockData],
							chartRef
						);
					}
					break;
				case 'NumberOfSells':
					if (!showPrevious) {
						createLinePlot(previousWeekNumberOfSellsMockData, chartRef);
					} else {
						createPreviousLinePlot(
							[previousWeekNumberOfSellsMockData, twoWeekNumberOfSellsMockData],
							chartRef
						);
					}
			}
			break;
	}
};
