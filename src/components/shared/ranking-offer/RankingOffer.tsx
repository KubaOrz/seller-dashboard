import { Divider } from "@mui/material";
import { FC } from "react";
import RotationImage from '../../../tools/assets/main-page/ranking/RotationImage.png';
import SoldImage from '../../../tools/assets/main-page/ranking/SoldImage.png';
import { useTranslation } from "react-i18next";
import { RankingOfferData } from "../../../tools/mock-data/offers/offers";

const RankingOffer: FC<RankingOfferData> = props => {
    const { t } = useTranslation();
    
    return (
        <div className={'rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer w-52'}>
            <div>
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

export default RankingOffer;