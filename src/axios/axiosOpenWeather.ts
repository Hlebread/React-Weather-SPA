import axios from "axios";
import { openWeatherConfig } from "../src.config";

export default axios.create({
  baseURL: openWeatherConfig.BASE_URL,
  params: {
    units: "metric",
    appid: openWeatherConfig.API_KEY,
    exclude: "minutely,hourly",
  },
});
