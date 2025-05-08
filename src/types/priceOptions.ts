export interface Option {
    value: string;
    label: string;
}

export const priceOptions: Option[] = [
    {
      value: "asc",
      label: "Price low to high",
    },
    {
      value: "desc",
      label: "Price high to low",
    },
  ];