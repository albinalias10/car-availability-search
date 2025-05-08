import React from 'react';
import CustomRoundedButton from './common/CustomRoundedButton';
import '../styles/BodyContainer.css'; 
import SortDropdown from './SortDropdown';
import { priceOptions } from '../types/priceOptionType';
import angleRight from '../assets/icons/angle-right.svg';

interface BodyContainerProps {
    isLoading?: boolean;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ isLoading = true }) => {
    return (
        <div className="body-container">
            <div className="content-layer">
            <CustomRoundedButton>
                <span>
                    Las Vegas - Airport 
                    <img
                        src={angleRight}
                        alt=">"
                        className={"arrow-icon"}
                    />
                     Las Vegas - Airport
                </span>
            </CustomRoundedButton>
            <SortDropdown options={priceOptions}/>
            </div>
            <div className="separator-line" />
            {isLoading && <div className="loading-container">loading...</div>}
        </div>
    );
};

export default BodyContainer;