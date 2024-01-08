import ClientSupportImage from '../assets/main-page/seller-quality/ClientSupportImage.png';
import PricesImage from '../assets/main-page/seller-quality/PricesImage.png';
import TimeImage from '../assets/main-page/seller-quality/TimeImage.png';
import NotSentImage from '../assets/main-page/orders/NotSentImage.png';

export const getQualityAspectImage = (aspectName: string) => {
    switch(aspectName) {
        case 'Client Support':
            return ClientSupportImage;
        case 'Prices':
            return PricesImage;
        case 'Delivery Time':
            return NotSentImage;
        case 'Product Quality':
            return TimeImage;
        case 'Respond Time':
            return TimeImage;
        default:
            return TimeImage;
    }
}