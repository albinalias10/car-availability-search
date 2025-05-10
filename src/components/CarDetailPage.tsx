import React from "react";
import type { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import type { CarDetails } from "../redux/actionType";
import person from '../assets/icons/person.svg';
import bag from '../assets/icons/bag.svg';
import door from '../assets/icons/door.svg';
import snowflake from '../assets/icons/snowflake.svg';
import fuel from '../assets/icons/fuel.svg';
import transmission from '../assets/icons/transmission.svg';
import { getVendorLogo } from "../utils/getVendorLogo";
import "../styles/carDetailsPage.css";
import { AIR_CONDITIONED_TEXT, BACK_BUTTON_TEXT, BAGGAGE_TEXT, DOORS_TEXT, PASSENGER_TEXT, PER_DAY_TEXT, UNLIMITED_KILOMETER_TEXT } from "../constants/constants";
import { clearCarDetails } from "../redux/action";

const CarDetailPage: React.FC = () => {
    const carDetails: CarDetails = useSelector((state: RootState) => state.selectedCarDetails[0]);
    const dispatch = useDispatch<AppDispatch>();

    const handleBackButtonClick = () => {
        dispatch(clearCarDetails());
    }
    return (
        <div className="car-details-wrapper">
            <div className="car-details-card">
                <div className="car-details-image-section">
                    <img src={carDetails.carImage} alt="Car" className="car-details-car-image" />
                    <img src={getVendorLogo(carDetails.vendorName)} alt="Vendor Logo" className="car-details-vendor-logo" />
                </div>
                <div className="car-details-separator"></div>

                <div className="car-details-info-section">
                    <h2 className="car-details-title">{carDetails.modelName}</h2>
                    <div className="car-spec-details">
                        <div className="car-spec-icon-layout"><img
                            src={fuel}
                            alt="Fuel:"
                            className="car-spec-icon"
                        /> {carDetails.fuelType}</div>
                             <div className="car-spec-icon-layout"><img
                            src={transmission}
                            alt="Transmission:"
                            className="car-spec-icon"
                        /> {carDetails.transmissionType}</div>
                        <div className="car-spec-icon-layout"><img
                            src={person}
                            alt="Person:"
                            className="car-spec-icon"
                        /> {carDetails.passengerQuantity} {PASSENGER_TEXT}</div>
                        <div className="car-spec-icon-layout"><img
                            src={bag}
                            alt="Bag:"
                            className="car-spec-icon"
                        /> {carDetails.baggageQuantity} {BAGGAGE_TEXT}</div>
                        <div className="car-spec-icon-layout"><img
                            src={door}
                            alt="Door:"
                            className="car-spec-icon"
                        />{carDetails.doorQuantity} {DOORS_TEXT}</div>
                        {carDetails.isAirConditioned && <div className="car-spec-icon-layout"><img
                            src={snowflake}
                            alt="Air Conditioned:"
                            className="car-spec-icon" />
                            {AIR_CONDITIONED_TEXT}
                        </div>}
                    </div>

                    <div className="car-details-price-footer">
                        <div>
                            {UNLIMITED_KILOMETER_TEXT} <br />
                            <strong>{carDetails.currency} {carDetails.price.toFixed(2)} {PER_DAY_TEXT}</strong>
                        </div>
                        <button className="car-details-back-button" onClick={handleBackButtonClick}>{BACK_BUTTON_TEXT}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailPage;