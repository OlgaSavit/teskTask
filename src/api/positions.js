import axios from "axios";
import config from "./config";
const { baseURL } = config;

export const getPositionsList = () => {
  return axios.get(`${baseURL}positions`);
};
