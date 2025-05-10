import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'
import type { AppDispatch } from './redux/store';
import { setCarDetailsArrayData, setPickupReturnDetails } from './redux/action';
import { fetchCarDetailsData } from './services/carService';
import { ERROR_DATA_TEXT } from './constants/constants';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  // Fetching the car details and pickup-return details data from the cars.json and setting it into the redux store
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
          const { pickupReturnDetails, carDetailsArray } = await fetchCarDetailsData(); // Fetching the data from the json file
      if (pickupReturnDetails) {
        dispatch(setPickupReturnDetails(pickupReturnDetails));
      }
      dispatch(setCarDetailsArrayData(carDetailsArray));
      } catch (error) { // Handle error
        console.error(ERROR_DATA_TEXT, error);
      }
      setIsLoading(false); // Set loading state to false
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
