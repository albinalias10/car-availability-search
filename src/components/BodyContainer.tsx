import React from 'react';
import CustomRoundedButton from './common/CustomRoundedButton';
import '../styles/bodyContainer.css';
import SortDropdown from './SortDropdown';
import { priceOptions } from '../types/priceOptionType';
import angleRight from '../assets/icons/angle-right.svg';
import CarContainer from './CarContainer';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import CarDetailPage from './CarDetailPage';

interface BodyContainerProps {
    isLoading?: boolean;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ isLoading = true }) => {
    const pickupReturnDetails = useSelector((state: RootState) => state.pickupReturnDetails);
    //checking if any car is selected or not, if selected calling the detailsComponent, otherwise the list the car list component
    const isCarSelected: boolean = useSelector((state: RootState) => state.selectedCarDetails?.length > 0);
    return (
        <div className="body-container">
            <div className="content-layer">
                <CustomRoundedButton>
                    <span>
                        {pickupReturnDetails?.pickupLocation}
                        <img
                            src={angleRight}
                            alt=">"
                            className="arrow-icon"
                        />
                        {pickupReturnDetails?.returnLocation}
                    </span>
                </CustomRoundedButton>
                <SortDropdown options={priceOptions} isCarSelected={isCarSelected} />
            </div>
            <div className="separator-line" />
            {isCarSelected ? <CarDetailPage /> : <CarContainer isLoading={isLoading} />}
        </div>
    );
};

export default BodyContainer;