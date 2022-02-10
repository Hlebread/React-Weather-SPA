import axios from "axios";

export default axios.create({
  baseURL: `https://hlebreadm-weather-default-rtdb.firebaseio.com/`,
  params: {
	auth: localStorage.token
  }
});
