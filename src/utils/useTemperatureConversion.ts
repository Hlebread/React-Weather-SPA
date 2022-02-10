import { useAppSelector } from "../store";
import { FAHRENHEIT } from "./constants";

const useTemperatureConversion = (): { getConvertedTemperature: Function } => {
  const units = useAppSelector((state) => state.settings.units);

  const getConvertedTemperature = (value: number) => {
    if (!value || !units) return 0;
    let temp = value;

    switch (units) {
      case FAHRENHEIT:
        temp = (value * 9) / 5 + 32;
        break;
      default:
        break;
    }
    return Math.round(temp);
  };
  return { getConvertedTemperature };
};
export default useTemperatureConversion;
