import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { createBarPlot, updateChart } from './chart-helpers';
import { ChartMeasure, ChartType, TimeRange } from './chart-model';
import { todayRotationMockData } from './mock-chart-data';

export const SalesChart: FC = () => {
	const { t } = useTranslation();
	const [measure, setMeasure] = useState<ChartMeasure>('Rotation');
	const [timeRange, setTimeRange] = useState<TimeRange>('Today');
	const [chartType, setChartType] = useState<ChartType>('Bar');
	const [showPrevious, setShowPrevious] = useState<boolean>(true);

	const chartRef = useRef(null);

	useEffect(() => {
		createBarPlot(todayRotationMockData, chartRef);
	}, []);

	useEffect(() => {
		updateChart(measure, timeRange, chartType, showPrevious, chartRef);
	}, [chartType, timeRange, measure, showPrevious]);

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl w-full">
			<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('SalesChart')}</p>
			<div className={'flex gap-1'}>
				<div className={'w-1/4 flex flex-col gap-3'}>
					<div className={'flex flex-col gap-1'}>
						<p className={'font-sans text-xs'}>{t('ChartMeasure')}</p>
						<Select
							value={measure}
							size={'small'}
							onChange={(event: SelectChangeEvent) => {
								setMeasure(event.target.value as ChartMeasure);
							}}
						>
							<MenuItem value={'Rotation'}>
								<div className={'pr-10'}>{t('Rotation')}</div>
							</MenuItem>
							<MenuItem value={'NumberOfSells'}>
								<div className={'pr-10'}>{t('NumberOfSells')}</div>
							</MenuItem>
						</Select>
					</div>
					<div className={'flex flex-col gap-1'}>
						<p className={'font-sans text-xs'}>{t('TimeRange')}</p>
						<Select
							value={timeRange}
							size={'small'}
							onChange={(event: SelectChangeEvent) => {
								setTimeRange(event.target.value as TimeRange);
							}}
						>
							<MenuItem value={'Today'}>
								<div className={'pr-10'}>{t('Today')}</div>
							</MenuItem>
							<MenuItem value={'CurrentWeek'}>
								<div className={'pr-10'}>{t('CurrentWeek')}</div>
							</MenuItem>
							<MenuItem value={'PreviousWeek'}>
								<div className={'pr-10'}>{t('PreviousWeek')}</div>
							</MenuItem>
						</Select>
					</div>
					<div className={'flex flex-col gap-1'}>
						<p className={'font-sans text-xs'}>{t('ChartType')}</p>
						<Select
							value={chartType}
							size={'small'}
							onChange={(event: SelectChangeEvent) => {
								setChartType(event.target.value as ChartType);
							}}
						>
							<MenuItem value={'Bar'}>
								<div className={'pr-10'}>{t('Bar')}</div>
							</MenuItem>
							<MenuItem value={'Linear'}>
								<div className={'pr-10'}>{t('Linear')}</div>
							</MenuItem>
						</Select>
					</div>
					<div className={'flex justify-center items-center'}>
						<Checkbox
							defaultChecked
							color="success"
							value={showPrevious}
							onChange={() => setShowPrevious(!showPrevious)}
						/>
						<p className={'font-sans text-black text-xs'}>{t('ShowLastPeriod')}</p>
					</div>
				</div>
				{/** @ts-ignore **/}
				<div ref={chartRef}></div>
			</div>
		</div>
	);
};
