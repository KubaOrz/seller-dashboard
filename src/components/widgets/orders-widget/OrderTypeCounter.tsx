import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type OrderTypeCounterProps = {
    image: any;
    numberOfElements: number;
    header: string;
    target: string
}

const OrderTypeCounter: FC<OrderTypeCounterProps> = props => {
    const { t } = useTranslation();
    
    return (
        <Link to={props.target}>
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
        </Link>
    );
};

export default OrderTypeCounter;