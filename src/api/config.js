import axios from "axios";
let config = {
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token != null) {
      config.headers["Token"] = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default config;
