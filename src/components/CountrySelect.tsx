import SelectElement from "./SelectElement";
import { Dispatch, SetStateAction } from "react";

interface CountrySelectProps {
  value: string;
  setCountry: Dispatch<SetStateAction<string>>;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, setCountry }) => {
  const countryOptions = [
    { label: "Deutschland", value: "local" },
    { label: "Weltweit", value: "global" },
  ];

  const handleChange = (selectedValue: string) => {
    setCountry(selectedValue);
  };

  return (
    <SelectElement
      options={countryOptions}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CountrySelect;
