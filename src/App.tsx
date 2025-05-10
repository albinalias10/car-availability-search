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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
          const { pickupReturnDetails, carDetailsArray } = await fetchCarDetailsData();
      if (pickupReturnDetails) {
        dispatch(setPickupReturnDetails(pickupReturnDetails));
      }
      dispatch(setCarDetailsArrayData(carDetailsArray));
      } catch (error) {
        console.error(ERROR_DATA_TEXT, error);
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
