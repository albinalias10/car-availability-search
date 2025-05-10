import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import '../styles/CarContainer.css';
import CarItem from './CarItem';
import { LOADING_TEXT } from '../constants/constants';

interface CarContainerProps {
    isLoading: boolean;
}
const CarContainer: React.FC<CarContainerProps> = ({ isLoading = true }) => {
    const carDetailsArray = useSelector((state: RootState) => state.carDetailsData);
    return (
        <div className="car-grid-container">
            {isLoading ? <div className="loading-container">{LOADING_TEXT}</div> : <div className="car-grid-layout">
                {(carDetailsArray && carDetailsArray.length) > 0 ? carDetailsArray.map((carItemData, index) => (
                    <CarItem key={index} carDetails={carItemData} />
                )) : null}
            </div>}
        </div>
    );
};

export default CarContainer;