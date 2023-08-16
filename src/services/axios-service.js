import axios from "axios";

import { BASE_URL } from "./url";

const axiosClient = () => {
  // const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  // New
  const token = "";

  const axiosOption = axios.create({
    baseURL: BASE_URL,
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  axiosOption.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosOption.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      throw error;
    }
  );

  return axiosOption;
};

export default axiosClient;
