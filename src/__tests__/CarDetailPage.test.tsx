import { render, screen, fireEvent } from '@testing-library/react';
import CarDetailPage from '../components/CarDetailPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BACK_BUTTON_TEXT, AIR_CONDITIONED_TEXT, UNLIMITED_KILOMETER_TEXT } from '../constants/constants';

const mockStore = configureStore(); 

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
];

describe('CarDetailPage Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      selectedCarDetails: mockCarDetails,
    });
  });

  it('renders car details correctly', () => {
    render(
      <Provider store={store}>
        <CarDetailPage />
      </Provider>
    );

    expect(screen.getByText('Kia Rio or similar')).toBeInTheDocument();
    expect(screen.getByText('Petrol')).toBeInTheDocument();
    expect(screen.getByText('Automatic')).toBeInTheDocument();
    expect(screen.getByText(/5 Passenger/)).toBeInTheDocument();
    expect(screen.getByText(/2 Bag/)).toBeInTheDocument();
    expect(screen.getByText(/2 Door/)).toBeInTheDocument();
    expect(screen.getByText(AIR_CONDITIONED_TEXT)).toBeInTheDocument();
    expect(screen.getByText(UNLIMITED_KILOMETER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(/CAD 731.47/)).toBeInTheDocument();
    expect(screen.getByText(BACK_BUTTON_TEXT)).toBeInTheDocument();
  });

  it('dispatches clearCarDetails when back button is clicked', () => {
    render(
      <Provider store={store}>
        <CarDetailPage />
      </Provider>
    );

    fireEvent.click(screen.getByText(BACK_BUTTON_TEXT));
  // Get the dispatched actions
  const dispatchedActions = store.getActions();

  // Expect the dispatched action to contain type and payload
  expect(dispatchedActions).toContainEqual({
    type: 'CLEAR_CAR_DETAILS',
    payload: [],
  });
})});