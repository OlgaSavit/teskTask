import Heading from "../../components/Heading";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import RadioComponent from "../../components/RadioComponent";
import { getPositionsList } from "../../api/positions";
import InputUploadComponent from "../../components/InputUploadComponent";
import { addUser, getToken } from "../../api/users";
import InputText from "../../components/InputText";
import { validationRulesError } from "../../utils/validationRules";
import Spinner from "../../components/Spinner";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { notify } from "../../utils/notify";
const cx = classNames.bind(styles);
const AuthBlock = ({ setSuccessUser }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "1",
    photo: null,
  });
  const [positionsList, setPositionsList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
  });

  const fetchPositionsList = () => {
    getPositionsList().then((res) => {
      if (res.status === 200) {
        setPositionsList(res.data.positions);
      }
    });
  };
  const formValidation = (e) => {
    e.preventDefault();
    let err = {
      name: validationRulesError({
        name: "isValidName",
        data: data.name,
        message: "Field is required",
      }).message,
      email: validationRulesError({
        name: "isEmail",
        data: data.email,
        message: "Invalid Email",
      }).message,
      phone: validationRulesError({
        name: "isPhone",
        data: data.phone,
        message: "Invalid Phone",
      }).message,
    };

    setErrors({ ...errors, other: "", ...err });
    let countError = 0;
    Object.keys(err).map((key) => {
      if (err[key]) countError++;
    });
    if (countError === 0) {
      onSubmit();
    }
  };
  useEffect(() => {
    fetchPositionsList();
  }, []);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const uploadPhoto = (event) => {
    setData({ ...data, [event.target.name]: event.target.files });
  };
  const onSubmit = (e) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position_id", data.position);
    getToken().then((res) => {
      if (res.status === 200) {
        setLoader(true);
        localStorage.setItem("token", res.data.token);
        addUser(formData)
          .then((res) => {
            if (res.status === 201) {
              setSuccessUser(true);
              setData({});
            }
          })
          .catch((err) => {
            if (err.response.status === 409) {
              notify({
                type: "error",
                message: err.response.data.message,
                timeOut: 3000,
              });
            } else {
              setErrors(err.response.data.fails);
            }
          })
          .finally(() => {
            setLoader(false);
          });
      }
    });
  };

  return (
    <section className={cx("authSection")}>
      <Heading level={1} position={"center"}>
        Working with POST request
      </Heading>
      <form className={cx("form")} onSubmit={(e) => formValidation(e)}>
        <div className={cx("wrapperInput")}>
          <InputText
            fullWidth
            label={"Your name"}
            onChange={handleChange}
            name="name"
            type="name"
            value={data.name}
            error={Boolean(errors?.name)}
            errorMessages={errors?.name}
          />
        </div>
        <div className={cx("wrapperInput")}>
          <InputText
            fullWidth
            label={"Email"}
            onChange={handleChange}
            name="email"
            type="email"
            value={data.email}
            error={Boolean(errors?.email)}
            errorMessages={errors?.email}
          />
        </div>
        <div className={cx("wrapperInput")}>
          <InputText
            fullWidth
            label={"Phone"}
            onChange={handleChange}
            name="phone"
            type="phone"
            value={data.phone}
            error={Boolean(errors?.phone)}
            errorMessages={errors?.phone}
            helperText={"+38 (XXX) XXX - XX - XX"}
          />
        </div>
        <div className={cx("radioWrapper")}>
          <RadioComponent
            textLabel={"Select your position"}
            list={positionsList}
            data={data.position}
            handleChange={handleChange}
            nameRadio={"position"}
          />
        </div>
        <div className={cx("fileWrapper")}>
          <InputUploadComponent
            error={errors?.photo}
            name={"photo"}
            onChange={uploadPhoto}
            file={data.photo}
            errorMessages={errors?.photo}
          />
        </div>
        <div className={cx("wrapperBtn")}>
          {loader ? (
            <Spinner color={"#00BDD3"} />
          ) : (
            <Button
              onClick={() => {
                !data.photo
                  ? setErrors({ ...errors, photo: ["Field is required"] })
                  : setErrors({ ...errors, photo: null });
              }}
            >
              Sign up
            </Button>
          )}
        </div>
      </form>
      <NotificationContainer />
    </section>
  );
};
export default AuthBlock;
