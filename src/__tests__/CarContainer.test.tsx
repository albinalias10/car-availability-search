import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CarContainer from '../components/CarContainer';
import { LOADING_TEXT } from '../constants/constants';

const mockStore = configureStore([]);

describe('CarContainer Component', () => {
  let store;

  const mockCarDetails = [
    {
      vendorName: 'HERTZ',
      modelName: 'Kia Rio or similar',
      transmissionType: 'Automatic',
      fuelType: 'Petrol',
      passengerQuantity: '5',
      baggageQuantity: '2',
      doorQuantity: '2',
      carImage: 'https://ctimg-fleet.cartrawler.com/kia/rio/primary.png?auto=format&w=600',
      price: 731.47,
      currency: 'CAD',
      isAirConditioned: true,
    },
    {
      vendorName: 'HERTZ',
      modelName: 'Ford Focus or similar',
      transmissionType: 'Automatic',
      fuelType: 'Petrol',
      passengerQuantity: '5',
      baggageQuantity: '2',
      doorQuantity: '5',
      carImage: 'https://ctimg-fleet.cartrawler.com/ford/focus/primary.png?auto=format&w=600',
      price: 731.49,
      currency: 'CAD',
      isAirConditioned: true,
    },
  ];

  it('should render loading text when isLoading is true', () => {
    store = mockStore({
      carDetailsData: [],
    });

    render(
      <Provider store={store}>
        <CarContainer isLoading={true} />
      </Provider>
    );

    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();
  });

  it('should render car items when isLoading is false and car data is available', () => {
    store = mockStore({
      carDetailsData: mockCarDetails,
    });

    render(
      <Provider store={store}>
        <CarContainer isLoading={false} />
      </Provider>
    );

    // Check for model names
    expect(screen.getByText(/Kia Rio or similar/i)).toBeInTheDocument();
    expect(screen.getByText(/Ford Focus or similar/i)).toBeInTheDocument();
  });
});