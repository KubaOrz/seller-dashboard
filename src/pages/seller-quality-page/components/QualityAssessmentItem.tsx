import { Divider } from "@mui/material";
import { FC } from "react";

type QualityAssessmentItemProps = {
    name: string;
    value: string;
    imgUrl: string;
}

const QualityAssessmentItem: FC<QualityAssessmentItemProps> = ({ name, value, imgUrl }) => {
    return (
        <div className="flex flex-row border overflow-hidden shadow-lg rounded-lg p-3">
            <div className="w-1/2">
                <img src={imgUrl} alt="Aspect" className="w-full h-full object-fit-cover" />
                    </div>

                    <div className="w-1/2 flex flex-col items-center gap-1 p-4">
                        <h1 className="text-center font-sans text-2xl text-headerText-light dark:text-headerText-dark">{name}</h1>
                        <Divider sx={{ width: '100%' }}/>
                        <p>{value}</p>
                    </div>
                </div>
    )
}

export default QualityAssessmentItem;