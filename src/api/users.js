import axios from "axios";
import config from "./config";
const { baseURL } = config;

export const getUserList = (params) => {
  return axios.get(`${baseURL}users`, { params: params });
};
export const getToken = () => {
  return axios.get(`${baseURL}token`);
};

export const addUser = (data) => {
  return axios.post(`${baseURL}users`, data);
};
