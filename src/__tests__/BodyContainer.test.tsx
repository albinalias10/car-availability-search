import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BodyContainer from '../components/BodyContainer';
import angleRight from '../assets/icons/angle-right.svg';

// Create a mock store with redux-mock-store
const mockStore = configureStore([]);

describe('BodyContainer Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      pickupReturnDetails: {
        pickupLocation: 'Las Vegas - Airport',
        returnLocation: 'Las Vegas - Airport',
      },
    });
  });

  it('should render BodyContainer and show location details', async () => {
    render(
      <Provider store={store}>
        <BodyContainer isLoading={false} />
      </Provider>
    );

    // Check if pickupLocation and returnLocation text is rendered using a regex matcher
    const locationText = await screen.findByText(/Las Vegas - Airport/);

    // Ensure the location text is present
    expect(locationText).toBeInTheDocument();
    // Check if arrow icon is rendered
    const arrowIcon = screen.getByAltText('>');
    expect(arrowIcon).toHaveAttribute('src', angleRight);
  });
});