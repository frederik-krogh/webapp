import axios from "axios";
import keycloak from "../main"

const http = axios.create({
  baseURL: "http://localhost:5170",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("vue-token");
    config.headers = {
      Authorization: `Bearer ${keycloak.token}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default http;