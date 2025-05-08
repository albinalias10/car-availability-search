export interface VendorDetail {
    Vendor: { '@Name': string };
    VehAvails: VehicleAvailability[];
}

export interface VehicleAvailability {
    Vehicle: {
        VehMakeModel: { '@Name': string };
        '@TransmissionType': string;
        '@FuelType': string;
        '@PassengerQuantity': string;
        '@BaggageQuantity': string;
        'PictureURL': string;
        '@AirConditionInd': string;
    };
    TotalCharge: {
        '@RateTotalAmount': string;
        '@CurrencyCode': string;
    };
}
