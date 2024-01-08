import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const KnowMore: FC<{ routeUrl: string }> = ({ routeUrl }) => {
    const { t } = useTranslation();
    return (
        <div className={'font-sans text-base text-[#10AC98] underline text-end'}>
            <Link to={routeUrl}>{t('KnowMore')}</Link>
        </div>
    );
};

export default KnowMore;