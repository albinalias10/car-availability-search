import { render, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setCarDetailsArrayData, setPickupReturnDetails } from '../redux/action';
import * as carService from '../services/carService';
import { vi } from 'vitest';

// Mock carService fetch function
vi.mock('../services/carService');
const mockStore = configureStore([]);

describe('App Component', () => {
  let store: ReturnType<typeof mockStore>;

  const mockPickupReturnDetails = {
    pickupLocation: 'Las Vegas - Airport',
    returnLocation: 'Las Vegas - Airport',
  };

  const mockCarDetailsArray = [
    {
      vendorName: 'HERTZ',
      modelName: 'Toyota Corolla or similar',
      transmissionType: 'Automatic',
      fuelType: 'Petrol',
      passengerQuantity: '5',
      baggageQuantity: '4',
      doorQuantity: '3',
      carImage: 'https://ctimg-fleet.cartrawler.com/toyota/corolla/primary.png?auto=format&w=600',
      price: 752.31,
      currency: 'CAD',
      isAirConditioned: true,
    },
  ];

  beforeEach(() => {
    store = mockStore({});
    (carService.fetchCarDetailsData as jest.Mock).mockResolvedValue({
      pickupReturnDetails: mockPickupReturnDetails,
      carDetailsArray: mockCarDetailsArray,
    });
  });

  it('renders and dispatches actions correctly', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const actions = store.getActions();

      // Ensure dispatch of correct actions with correct payload
      expect(actions).toContainEqual(setPickupReturnDetails(mockPickupReturnDetails));
      expect(actions).toContainEqual(setCarDetailsArrayData(mockCarDetailsArray));
    });
  });
});