import { FC } from "react";
import { SellerQualityAspect } from "../../../tools/mock-data/seller-quality/sellerQuality";
import { useTranslation } from "react-i18next";

type SingleSellerQualityProps = SellerQualityAspect & {
    imgSrc: string;
}

const SingleSellerQuality: FC<SingleSellerQualityProps> = props => {
    const { t } = useTranslation();

    return (
        <div className={'flex flex-col justify-center items-center gap-1'}>
            <div className={'flex justify-center items-center gap-1'}>
                <img src={props.imgSrc} alt={'img'} className={'w-10'} />
                <p>{props.assesment}</p>
            </div>
            <p className={'text-[#666666] text-xs'}>{t(props.name)}</p>
        </div>
    );
};

export default SingleSellerQuality;