import React, { useEffect, useState } from "react";
import { addUser, getInfoUser, getToken } from "../api/users";
import { notify } from "../utils/notify";
import { getPositionsList } from "../api/positions";

const useAddUserHoc = (setSuccessUser, setUser, setError) => {
  const [loader, setLoader] = useState(false);
  const [token, setToken] = useState(null);
  const [positionsList, setPositionsList] = useState([]);
  const fetchToken = () => {
    getToken().then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      }
    });
  };
  const fetchPositionsList = () => {
    getPositionsList().then((res) => {
      if (res.status === 200) {
        setPositionsList(res.data.positions);
      }
    });
  };
  useEffect(() => {
    fetchPositionsList();
    fetchToken();
  }, []);
  const sendFormData = (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position_id", data.position);
    setLoader(true);
    addUser(formData, token)
      .then((res) => {
        if (res.status === 201) {
          let { user_id, message } = res.data;
          setSuccessUser(message);
          getInfoUser(user_id)
            .then((res) => {
              if (res.status === 200) {
                let { user } = res.data;
                setUser(user);
              }
            })
            .catch((err) => {
              console.error(err.response.message);
            });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          notify({
            type: "error",
            message: err.response.data.message,
            timeOut: 3000,
          });
        } else if (err.response.status === 409) {
          notify({
            type: "error",
            message: err.response.data.message,
            timeOut: 3000,
          });
        } else if (err.response.status === 422) {
          let { fails } = err.response.data;
          let keys = Object.keys(err.response.data.fails);
          keys.map((item) => {
            setError(item, { message: fails[item].join() });
          });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return { sendFormData, loader, positionsList };
};
export { useAddUserHoc };
