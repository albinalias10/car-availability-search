import React from 'react';
import CustomRoundedButton from './common/CustomRoundedButton';
import '../styles/BodyContainer.css'; 
import SortDropdown from './SortDropdown';
import { priceOptions } from '../types/priceOptions';
import angleRight from '../assets/icons/angle-right.svg';

const BodyContainer: React.FC = () => {
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
        </div>
    );
};

export default BodyContainer;