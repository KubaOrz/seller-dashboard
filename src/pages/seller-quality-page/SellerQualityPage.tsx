import React, { FC, useEffect, useState } from "react";
import SellerQualityAspects from "./components/SellerQualityAspects";
import { SellerQualityAspect, SellerQualityCategory, SellerQualityData, sellerQualityData } from "../../tools/mock-data/seller-quality/sellerQuality";
import QualityAssessmentImage from '../../tools/assets/seller-quality-page/QualityAssessmentImage.png';
import QualityCategoryImage from '../../tools/assets/seller-quality-page/QualityCategoryImage.png';
import QualityAssessmentItem from "./components/QualityAssessmentItem";

const SellerQualityPage: FC = () => {
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

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center font-sans text-4xl text-[#10AC98] mb-5">Jakość sprzedaży</h1>
            {qualityCategory &&
                <div className="grid grid-cols-2 w-100 gap-3 mb-3 md:w-3/4 lg:w-2/3">
                    <QualityAssessmentItem name={"Ocena jakości"} value={`${qualityAssessment}/50`} imgUrl={QualityAssessmentImage} />
                    <QualityAssessmentItem name={"Kategoria jakości"} value={qualityCategory} imgUrl={QualityCategoryImage} />
                </div>
            }
            {qualityData && <SellerQualityAspects aspects={qualityData} />}
    </div>
    );
};

export default SellerQualityPage;
