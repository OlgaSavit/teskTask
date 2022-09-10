import axios from "axios";
import config from "./config";
const { baseURL } = config;

export const getUserList = (params) => {
  return axios.get(`${baseURL}users`, { params: params });
};
export const getToken = () => {
  return axios.get(`${baseURL}token`);
};

export const addUser = (data, token) => {
  const config = {
    headers: { Token: `${token}`},
  };
  return axios.post(`${baseURL}users`, data, config);
};
export const getInfoUser = (id) => {
  return axios.get(`${baseURL}users/${id}`);
};
