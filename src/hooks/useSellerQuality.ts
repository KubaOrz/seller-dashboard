import { useEffect, useState } from "react";
import { SellerQualityCategory, SellerQualityData, sellerQualityData } from "../tools/mock-data/seller-quality/sellerQuality";

export const useSellerQuality = () => {
    const [qualityData, setQualityData] = useState<SellerQualityData | null>(null);
    const [qualityAssessment, setQualityAssessment] = useState(0);
    const [qualityCategory, setQualityCategory] = useState<SellerQualityCategory>();

    useEffect(() => {
        setQualityData(sellerQualityData);
        const qualityAssessment = countTotalAssessment(sellerQualityData);
        setQualityAssessment(qualityAssessment);
        setQualityCategory(findQualityCategory(qualityAssessment));
    }, []);

    const countTotalAssessment = (qualityData: SellerQualityData) => {
        if (!qualityData) {
            return 0;
        }
        let totalAssessment = 0;
        totalAssessment += qualityData?.clientSupport.assesment;
        totalAssessment += qualityData?.prices.assesment;
        totalAssessment += qualityData?.deliveryTime.assesment;
        totalAssessment += qualityData?.productQuality.assesment;
        totalAssessment += qualityData?.respondTime.assesment;
        return totalAssessment;
    }

    const findQualityCategory = (totalAssessment: number): SellerQualityCategory => {
        if (totalAssessment < 20) return "very-bad";
        else if (totalAssessment < 30) return "bad";
        else if (totalAssessment < 40) return "good";
        else return "very-good";
    }

    return { qualityData, qualityAssessment, qualityCategory };
}