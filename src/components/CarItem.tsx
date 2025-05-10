import React from 'react';
import type { CarDetails } from '../redux/actionType';
import '../styles/CarItem.css';
import person from '../assets/icons/person.svg';
import bag from '../assets/icons/bag.svg';
import door from '../assets/icons/door.svg';
import snowflake from '../assets/icons/snowflake.svg';
import { getVendorLogo } from '../utils/getVendorLogo';
import { setCarDetails } from '../redux/action';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { PER_DAY_TEXT, UNLIMITED_KILOMETER_TEXT } from '../constants/constants';

interface CarItemProps {
    carDetails: CarDetails
}

const CarItem: React.FC<CarItemProps> = ({ carDetails }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        // Ading the selected car details to the redux store
        dispatch(setCarDetails([carDetails]));
    };
    return (
        <div className="car-item" onClick={handleClick}>
            <div className="car-details-layout">
                <h3 className="model-title">{carDetails.modelName}</h3>
                <p className="car-fuel-transmission">{carDetails.fuelType} {carDetails.transmissionType}</p>
                <div className="car-icon-container">
                    <span className="icon-layout"><img
                        src={person}
                        alt="Person:"
                        className="car-detail-icon"
                    /> {carDetails.passengerQuantity}</span>
                    <span className="icon-layout"><img
                        src={bag}
                        alt="Bag:"
                        className="car-detail-icon"
                    /> {carDetails.baggageQuantity}</span>
                    <span className="icon-layout"><img
                        src={door}
                        alt="Door:"
                        className="car-detail-icon"
                    />{carDetails.doorQuantity}</span>
                    {carDetails.isAirConditioned && <span className="icon-layout"><img
                        src={snowflake}
                        alt="Air Conditioned:"
                        className="car-detail-icon" />
                    </span>}
                </div>
            </div>
            <div className="car-image">
                <img src={carDetails.carImage} alt={carDetails.modelName} />
            </div>
            <div className="car-price-container">
                <div className="price-layout">
                    <div className="car-price">
                        <span className="price-text">{carDetails.currency} {carDetails.price.toFixed(2)}</span> {PER_DAY_TEXT}
                    </div>
                    <div>✅ {UNLIMITED_KILOMETER_TEXT}</div>
                </div>
                <div className="vendor-layout">
                    <img src={getVendorLogo(carDetails.vendorName)} alt={`${carDetails.vendorName} logo`} className="vendor-logo" />
                </div>
            </div>
        </div>
    );
};

export default CarItem;