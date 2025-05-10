import { NETWORK_ERROR_TEXT } from "../constants/constants";
import type { CarDetails, PickupReturnDetails } from "../redux/actionType";
import type { VehicleAvailability, VendorDetail } from "../types/carDataType";

// Service for fetching the car details data from a JSON file and returns the pickupReturn details and car details array.
export async function fetchCarDetailsData(): Promise<{
  pickupReturnDetails: PickupReturnDetails | null;
  carDetailsArray: CarDetails[];
}> {
  const response = await fetch("cars.json");
  let carPickUPReturnLocationDetails: PickupReturnDetails | null = null;
  if (!response.ok) {
    throw new Error(NETWORK_ERROR_TEXT); // Handle network error
  }
  const data = await response.json();
  const carRentingDetails = data[0]?.VehAvailRSCore?.VehRentalCore;
  if (carRentingDetails) {
    // Extracting pickup and return location details
    carPickUPReturnLocationDetails = {
      pickupLocation: carRentingDetails.PickUpLocation?.['@Name'],
      returnLocation: carRentingDetails.ReturnLocation?.['@Name'],
    }
  }
  const carDetailsData: CarDetails[] = data[0]?.VehAvailRSCore?.VehVendorAvails.flatMap((vendorDetail: VendorDetail) =>
    // Extracting car details from each vendor
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
  // Sorting the car details array data based on price in ascending order
  const sortedCarDetailsData: CarDetails[] = carDetailsData.sort((prevItem, nextItem) => prevItem.price - nextItem.price);
  return {
    pickupReturnDetails: carPickUPReturnLocationDetails,
    carDetailsArray: sortedCarDetailsData,
  };
}