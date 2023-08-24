import axios from "axios";

class ApiApp {
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },

  onApiGetListTrip = async (args) => {
    return await AxiosInstance({
      method: "POST",
      url: "trip",
    });
  };
}

export const API_APP = new ApiApp();

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

export { AxiosInstance };
