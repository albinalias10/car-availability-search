import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'
import type { AppDispatch } from './redux/store';
import { setCarDetailsArrayData, setPickupReturnDetails } from './redux/action';
import type { CarDetails, PickupReturnDetails } from './redux/actionType';
import type { VehicleAvailability, VendorDetail } from './types/carDataType';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("cars.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const carRentingDetails = data[0]?.VehAvailRSCore?.VehRentalCore;
        if (carRentingDetails) {
          const carPickUPReturnLocationDetails: PickupReturnDetails = {
            pickupLocation: carRentingDetails.PickUpLocation?.['@Name'],
            returnLocation: carRentingDetails.ReturnLocation?.['@Name'],
          }
          dispatch(setPickupReturnDetails(carPickUPReturnLocationDetails));
        }
      const carDetailsData: CarDetails[] = data[0]?.VehAvailRSCore?.VehVendorAvails.flatMap((vendorDetail: VendorDetail) =>
        vendorDetail.VehAvails.map((item: VehicleAvailability) => ({
          vendorName: vendorDetail.Vendor['@Name'],
          modelName: item.Vehicle.VehMakeModel['@Name'],
          transmissionType: item.Vehicle['@TransmissionType'],
          fuelType: item.Vehicle['@FuelType'],
          passengerQuantity: item.Vehicle['@PassengerQuantity'],
          baggageQuantity: item.Vehicle['@BaggageQuantity'],
          doorQuantity: item.Vehicle['@DoorCount'],
          carImage: item.Vehicle['PictureURL'],
          price: parseFloat(item.TotalCharge['@RateTotalAmount']),
          currency: item.TotalCharge['@CurrencyCode'],
          isAirConditioned: item.Vehicle["@AirConditionInd"] === 'true',
        }))
      );
      dispatch(setCarDetailsArrayData(carDetailsData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <BodyContainer isLoading={isLoading}/>
    </>
  )
}

export default App
