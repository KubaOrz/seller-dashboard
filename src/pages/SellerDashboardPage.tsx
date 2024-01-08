import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Divider, MenuItem, Rating, Select, SelectChangeEvent } from '@mui/material';
import { SampleReviewImage } from '../tools/assets/main-page/SampleReviewImage';
import { RoutesConstants } from '../core/constants/RoutesConstants';
import { Link } from 'react-router-dom';
import SalesTipsImage from '../tools/assets/main-page/sales-tips/SalesTips.png';
import MockRankingImage from '../tools/assets/main-page/ranking/mockRankingImage.png';
// @ts-ignore
import * as d3 from 'd3';
import RankingOffer from '../components/shared/ranking-offer/RankingOffer';
import { OrdersWidget } from '../components/widgets/orders-widget/OrdersWidget';
import KnowMore from '../components/shared/know-more/KnowMore';
import SellerQualityWidget from '../components/widgets/seller-quality/SellerQualityWidget';

export type ReviewType = 'Positive' | 'Negative' | 'All';

type Review = {
	reviewerName: string;
	numberOfStars: number;
	comment: string;
	typeOfReview: ReviewType;
};

const sampleReview: Review = {
	numberOfStars: 5,
	comment: 'Bardzo dobry sprzedawca',
	reviewerName: 'Adam Adamowski',
	typeOfReview: 'Positive'
};

export const SellerDashboardPage: FC = () => {
	const { t } = useTranslation();
	const [reviewType, setReviewType] = useState<ReviewType>('Positive');

	const handleChange = (event: SelectChangeEvent) => {
		const selectedType = event.target.value;
		const reviewType: ReviewType = selectedType as ReviewType;
		setReviewType(reviewType);
	};

	const Review: FC<{ review: Review }> = ({ review }) => {
		return (
			<div className={'flex'}>
				<div className={'flex flex-col gap-1 justify-center items-center'}>
					<SampleReviewImage />
					<p className={'text-[#666666] font-sans text-center text-xs'}>{review.reviewerName}</p>
				</div>
				<div className={'flex flex-col gap-1 items-center justify-start'}>
					<Rating name="read-only" value={review.numberOfStars} readOnly size={'large'} />
					<p className={'text-sans text-xs text-[#000000]'}>{review.comment}</p>
				</div>
			</div>
		);
	};

	const SalesTips: FC = () => {
		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl h-full w-full">
				<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('SalesTips')}</p>
				<img src={SalesTipsImage} className={'h-52'} alt={'Sales tips'} />
				<Divider sx={{ mt: 1, mb: 2 }} />
				<KnowMore routeUrl={RoutesConstants.ORDERS_PAGE} />
			</div>
		);
	};

	const OfferRankingDashboard: FC = () => {
		const { t } = useTranslation();

		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl">
				<div className={'flex gap-2 items-center justify-center'}>
					<div className={'flex gap-2'}>
						<div className={'flex justify-center items-center'}>
							<Checkbox defaultChecked color="success" />
							<p className={'font-sans text-black text-small'}>{t('BestSold')}</p>
						</div>
						<div className={'flex justify-center items-center'}>
							<Checkbox defaultChecked color="success" />
							<p className={'font-sans text-black'}>{t('TheLeastSold')}</p>
						</div>
					</div>
					<span className={'font-sans text-3xl text-[#10AC98]'}>{t('Offer ranking')}</span>
				</div>
				<div className={'flex gap-4'}>
					<RankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<RankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<RankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<RankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
				</div>
				<div className={'font-sans text-base text-[#10AC98] underline text-end mt-2'}>
					<Link to={RoutesConstants.OFFER_RANKING_PAGE}>{t('SearchOffers')}</Link>
				</div>
			</div>
		);
	};

	const SalesChart: FC = () => {
		const { t } = useTranslation();
		const [chartMeasureValue, setChartMeasureValue] = useState('Rotation');
		const [timeRange, setTimeRange] = useState('Today');
		const [chartType, setChartType] = useState('Linear');

		const chartRef = useRef();

		useEffect(() => {
			const data = [
				{ time: '8:00', value: 100 },
				{ time: '9:00', value: 110 },
				{ time: '10:00', value: 150 },
				{ time: '11:00', value: 160 },
				{ time: '12:00', value: 170 },
				{ time: '13:00', value: 200 },
				{ time: '14:00', value: 150 },
				{ time: '15:00', value: 210 },
				{ time: '16:00', value: 140 },
				{ time: '17:00', value: 120 },
				{ time: '18:00', value: 100 },
				{ time: '19:00', value: 80 },
				{ time: '20:00', value: 60 },
				{ time: '21:00', value: 40 },
				{ time: '12:00', value: 20 }
			];

			const width: number = 550;
			const height: number = 250;
			const margin = { top: 20, right: 20, bottom: 30, left: 40 };

			const svg = d3
				.select(chartRef.current)
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr('transform', `translate(${margin.left},${margin.top})`);

			const colorScale = d3
				.scaleOrdinal()
				.domain(data.map((d, i) => i))
				.range(['#C0A6FF', '#7F66E7']);

			const xScale = d3
				.scaleBand()
				.domain(data.map(d => d.time))
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
				.attr(
					'height',
					(d: { value: any }) => height - margin.top - margin.bottom - yScale(d.value)
				)
				.attr('fill', colorScale);
		}, []);

		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl w-full">
				<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('SalesChart')}</p>
				<div className={'flex gap-1'}>
					<div className={'w-1/4 flex flex-col gap-3'}>
						<div className={'flex flex-col gap-1'}>
							<p className={'font-sans text-xs'}>{t('ChartMeasure')}</p>
							<Select value={chartMeasureValue} onChange={handleChange} size={'small'}>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
							</Select>
						</div>
						<div className={'flex flex-col gap-1'}>
							<p className={'font-sans text-xs'}>{t('TimeRange')}</p>
							<Select value={chartMeasureValue} onChange={handleChange} size={'small'}>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
							</Select>
						</div>
						<div className={'flex flex-col gap-1'}>
							<p className={'font-sans text-xs'}>{t('ChartType')}</p>
							<Select value={chartMeasureValue} onChange={handleChange} size={'small'}>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
								<MenuItem value={'Rotation'}>
									<div className={'pr-10'}>{t('Rotation')}</div>
								</MenuItem>
							</Select>
						</div>
						<div className={'flex justify-center items-center'}>
							<Checkbox defaultChecked color="success" />
							<p className={'font-sans text-black text-xs'}>{t('ShowLastPeriod')}</p>
						</div>
					</div>
					{/** @ts-ignore **/}
					<div ref={chartRef}></div>
				</div>
			</div>
		);
	};

	const SalesReview: FC = () => {
		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl">
				<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('Opinie kupujacych')}</p>
				<div className={'flex justify-center items-center'}>
					<Select value={reviewType} onChange={handleChange} size={'small'}>
						<MenuItem value={'Positive'}>
							<div className={'pr-10'}>{t('Positive')}</div>
						</MenuItem>
						<MenuItem value={'Negative'}>
							<div className={'pr-10'}>{t('Negative')}</div>
						</MenuItem>
						<MenuItem value={'All'}>
							<div className={'pr-10'}>{t('All')}</div>
						</MenuItem>
					</Select>
				</div>
				<div className={'mt-4 mx-2 flex flex-col gap-1'}>
					{[sampleReview, sampleReview, sampleReview, sampleReview, sampleReview].map(
						(review, index) => {
							return <Review key={index} review={review} />;
						}
					)}
				</div>
				<Divider sx={{ mt: 1, mb: 2 }} />
				<KnowMore routeUrl={RoutesConstants.CUSTOMER_REVIEWS_PAGE} />
			</div>
		);
	};

	return (
		<div className={'m-2 flex justify-center items-center'}>
			<div className={'flex flex-col gap-4'}>
				<div className={'flex gap-4'}>
					<SalesReview />
					<div className={'flex gap-4 flex-col w-full'}>
						<div className={'flex gap-4 w-full'}>
							<div className={'w-1/2'}>
								<OrdersWidget />
							</div>
							<div className={'w-1/2'}>
								<SellerQualityWidget />
							</div>
						</div>
						<OfferRankingDashboard />
					</div>
				</div>
				<div className={'flex gap-4 mb-10'}>
					<div className={'w-8/12'}>
						<SalesChart />
					</div>
					<div className={'w-4/12'}>
						<SalesTips />
					</div>
				</div>
			</div>
		</div>
	);
};
