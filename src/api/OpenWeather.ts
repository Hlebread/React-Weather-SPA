import api from "../axios/axiosOpenWeather";

export default class OpenWeather {
  static async get({ coords: { latitude, longitude } }: GeolocationPosition) {
    const apiQuery = {
      lat: latitude,
      lon: longitude,
    };

    try {
      const { data } = await api.get("/onecall", {
        params: apiQuery,
      });
      data.current.city = data.timezone.split("/")[1];
      data.current.updated = new Date();
      return data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
}
