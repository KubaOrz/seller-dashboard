import React, { FC, useEffect, useState } from "react";
import SellerQualityAspects from "./components/SellerQualityAspects";
import { SellerQualityAspect, SellerQualityCategory, SellerQualityData, sellerQualityData } from "../../tools/mock-data/seller-quality/sellerQuality";
import QualityAssessmentImage from '../../tools/assets/seller-quality-page/QualityAssessmentImage.png';
import QualityCategoryImage from '../../tools/assets/seller-quality-page/QualityCategoryImage.png';
import QualityAssessmentItem from "./components/QualityAssessmentItem";
import { useSellerQuality } from "../../hooks/useSellerQuality";

const SellerQualityPage: FC = () => {
    const { qualityData, qualityCategory, qualityAssessment } = useSellerQuality();

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
