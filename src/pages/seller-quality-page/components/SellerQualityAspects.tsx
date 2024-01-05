import { FC } from "react";
import { SellerQualityData } from "../../../tools/mock-data/seller-quality/sellerQuality";
import SingleSellerQualityAspect from "./SingleSellerQualityAspect";
import CustomerService from '../../../tools/assets/seller-quality-page/CustomerService.png'
import DeliveryTimeImage from '../../../tools/assets/seller-quality-page/DeliveryTimeImage.png'
import PriceImage from '../../../tools/assets/seller-quality-page/PriceImage.png'
import ProductQualityImage from '../../../tools/assets/seller-quality-page/ProductQualityImage.png'
import RespondTimeImage from '../../../tools/assets/seller-quality-page/RespondTimeImage.png'


const SellerQualityAspects: FC<{ aspects: SellerQualityData }> = ({ aspects }) => {
    return (
        <div className="grid grid-cols-5 gap-3 w-100 md:w-3/4 lg:w-2/3">
            <SingleSellerQualityAspect 
                imgUrl={CustomerService} 
                aspect={aspects.clientSupport} 
            />
            <SingleSellerQualityAspect 
                imgUrl={PriceImage} 
                aspect={aspects.prices} 
            />
            <SingleSellerQualityAspect 
                imgUrl={DeliveryTimeImage} 
                aspect={aspects.deliveryTime} 
            />
            <SingleSellerQualityAspect 
                imgUrl={ProductQualityImage} 
                aspect={aspects.productQuality} 
            />
            <SingleSellerQualityAspect 
                imgUrl={RespondTimeImage} 
                aspect={aspects.respondTime} 
            />
        </div>
    );
};


export default SellerQualityAspects;