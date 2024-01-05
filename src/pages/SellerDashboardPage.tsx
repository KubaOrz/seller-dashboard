import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Divider, MenuItem, Rating, Select, SelectChangeEvent } from '@mui/material';
import { SampleReviewImage } from '../tools/assets/main-page/SampleReviewImage';
import { RoutesConstants } from '../core/constants/RoutesConstants';
import { Link } from 'react-router-dom';
import NotPaidImage from '../tools/assets/main-page/orders/NotPaidImage.png';
import RefundImage from '../tools/assets/main-page/orders/RefundImage.png';
import NotSentImage from '../tools/assets/main-page/orders/NotSentImage.png';
import SellerQualityImage from '../tools/assets/main-page/seller-quality/QualityImage.png';
import CategoryImage from '../tools/assets/main-page/seller-quality/CategoryImage.png';
import PricesImage from '../tools/assets/main-page/seller-quality/PricesImage.png';
import TimeImage from '../tools/assets/main-page/seller-quality/TimeImage.png';
import ClientSupportImage from '../tools/assets/main-page/seller-quality/ClientSupportImage.png';
import SalesTipsImage from '../tools/assets/main-page/sales-tips/SalesTips.png';
import MockRankingImage from '../tools/assets/main-page/ranking/mockRankingImage.png';
import RotationImage from '../tools/assets/main-page/ranking/RotationImage.png';
import SoldImage from '../tools/assets/main-page/ranking/SoldImage.png';
// @ts-ignore
import * as d3 from 'd3';

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

	const KnowMore: FC<{ routeUrl: string }> = ({ routeUrl }) => {
		return (
			<div className={'font-sans text-base text-[#10AC98] underline text-end'}>
				<Link to={routeUrl}>{t('KnowMore')}</Link>
			</div>
		);
	};

	const SellerQuality: FC = () => {
		const SingleSellerQuality: FC<{ imgSrc: any; rate: string; header: string }> = props => {
			return (
				<div className={'flex flex-col justify-center items-center gap-1'}>
					<div className={'flex justify-center items-center gap-1'}>
						<img src={props.imgSrc} alt={'img'} className={'w-10'} />
						<p>{props.rate}</p>
					</div>
					<p className={'text-[#666666] text-xs'}>{t(props.header)}</p>
				</div>
			);
		};
		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl w-full">
				<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('SellerQuality')}</p>
				<div className={'flex justify-between'}>
					<div className={'flex flex-col justify-center items-center'}>
						<div className={'flex justify-center items-center gap-1'}>
							<img src={SellerQualityImage} className={'w-10'} alt={'image'} />
							<p>31/50</p>
						</div>
						<p>{t('Seller mark')}</p>
					</div>
					<div className={'flex flex-col justify-center items-center'}>
						<div className={'flex justify-center items-center gap-1'}>
							<img src={CategoryImage} alt={'image'} className={'w-10'} />
							<p>Good</p>
						</div>
						<p>{t('Your quality category')}</p>
					</div>
				</div>
				<Divider sx={{ mt: 1, mb: 2 }} />
				<div>
					<p className={'text-center text-[#10AC98] font-sans'}>{t('SellerQualityHeading')}</p>
					<div className={'flex gap-2 justify-between'}>
						<SingleSellerQuality header={'ClientHelp'} imgSrc={ClientSupportImage} rate={'2/10'} />
						<SingleSellerQuality header={'ProductPrices'} imgSrc={PricesImage} rate={'4/10'} />
						<SingleSellerQuality header={'DeliveryTime'} imgSrc={TimeImage} rate={'5/10'} />
					</div>
					<Divider sx={{ mt: 1, mb: 2 }} />
					<KnowMore routeUrl={RoutesConstants.SELLER_QUALITY_PAGE} />
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

		const MainPageRankingOffer: FC<{
			imgSrc: any;
			productName: string;
			soldNumber: number;
			rotation: number;
		}> = props => {
			return (
				<div className={'rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer'}>
					<div className={'w-52'}>
						<img src={props.imgSrc} alt={'image'} className={'object-fill'} />
					</div>
					<div className={'p-2'}>
						<div className={'flex flex-col'}>
							<p className={'text-center text-[#10AC98] font-sans'}>{t(props.productName)}</p>
							<Divider />
							<div className={'flex gap-2 flex-col mb-3 mt-1'}>
								<div className={'flex gap-1 justify-between items-center px-4'}>
									<img src={SoldImage} alt={'image'} className={'w-5'} />
									<p className={'font-sans text-xs text-center'}>{t('Sold')}</p>
									<p className={'font-sans text-xs text-center'}>
										{props.soldNumber} {t('szt.')}
									</p>
								</div>
								<div className={'flex gap-1 justify-between items-center px-4'}>
									<img src={RotationImage} alt={'image'} className={'w-5'} />
									<p className={'font-sans text-xs text-center'}>{t('Rotation')}</p>
									<p className={'font-sans text-xs text-center'}>
										{props.soldNumber} {t('szt.')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		};
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
					<MainPageRankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<MainPageRankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<MainPageRankingOffer
						imgSrc={MockRankingImage}
						productName={'Rower gorski'}
						soldNumber={13}
						rotation={13000}
					/>
					<MainPageRankingOffer
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

	const DashboardOrders: FC<{ notPaid: number; notSent: number; refund: number }> = ({
		notSent,
		notPaid,
		refund
	}) => {
		const DashboardOrder: FC<{ image: any; numberOfElements: number; header: string }> = props => {
			return (
				<div className={'flex flex-col items-center justify-center'}>
					<p className={'font-sans text-base text-black text-center'}>{t(props.header)}</p>
					<img src={props.image} alt={'NotPaidImage'} className={'w-14 mb-1'} />
					<div
						className={
							'rounded-full bg-[#7F66E7] text-white h-10 w-10 flex items-center justify-center'
						}
					>
						{props.numberOfElements}
					</div>
				</div>
			);
		};
		return (
			<div className="border border-solid border-gray-400 p-4 rounded-xl w-full h-full">
				<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('Orders')}</p>
				<div className={'flex gap-1 mt-10 justify-between items-center px-4'}>
					<DashboardOrder image={NotPaidImage} numberOfElements={notPaid} header={'NotPaid'} />
					<DashboardOrder image={NotSentImage} numberOfElements={notSent} header={'NotSent'} />
					<DashboardOrder image={RefundImage} numberOfElements={refund} header={'Refunds'} />
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
								<DashboardOrders notPaid={5} notSent={5} refund={5} />
							</div>
							<div className={'w-1/2'}>
								<SellerQuality />
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
