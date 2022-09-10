import Heading from "../../components/Heading";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import RadioComponent from "../../components/RadioComponent";
import { getPositionsList } from "../../api/positions";

import { addUser, getInfoUser, getToken } from "../../api/users";
import Spinner from "../../components/Spinner";
import { useForm, Controller } from "react-hook-form";
import InputTextNew from "../../components/InputTextNew";
import InputUploadComponent from "../../components/InputUploadNewComponent";
import { notify } from "../../utils/notify";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { patternEmail, patternPhone } from "../../utils/patterns";
const cx = classNames.bind(styles);
const AuthBlock = ({ setSuccessUser, setUser }) => {
  let ref = useRef();
  let refRadio = useRef();
  const [positionsList, setPositionsList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [token, setToken] = useState(null);
  const fetchPositionsList = () => {
    getPositionsList().then((res) => {
      if (res.status === 200) {
        setPositionsList(res.data.positions);
      }
    });
  };
  const fetchToken = () => {
    getToken().then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      }
    });
  };
  useEffect(() => {
    fetchPositionsList();
    fetchToken();
    return () => {
      localStorage.removeItem("token");
    };
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setError,
    setValue,
    getValues,
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: 1,
      photo: null,
    },
  });
  const handleChange = (event) => {
    setValue("position", event.target.value);
  };
  const uploadPhoto = (file) => {
    setValue("photo", file);
  };

  const onSubmit = (data) => {
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
  return (
    <section id={"SignUpBlock"} className={cx("authSection")}>
      <Heading level={1} position={"center"}>
        Working with POST request
      </Heading>
      <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("wrapperInput")}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Field is required",
              validate: {
                maxLength: (value) =>
                  (value.length > 1 && value.length < 60) ||
                  "User name, should be 2-60 characters",
              },
            }}
            render={({ field, inputRef }) => (
              <InputTextNew
                ref={ref}
                fullWidth
                label={"Name"}
                name={"name"}
                errors={errors.name}
                {...field}
                {...inputRef}
              />
            )}
          />
        </div>
        <div className={cx("wrapperInput")}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Field is required",
              validate: {
                correctEmail: (value) =>
                  patternEmail.test(value) ||
                  "User email, must be a valid email according to RFC2822",
              },
            }}
            render={({ field }) => (
              <InputTextNew
                fullWidth
                label={"Email"}
                name={"email"}
                errors={errors.email}
                {...field}
              />
            )}
          />
        </div>
        <div className={cx("wrapperInput")}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Field is required",
              validate: {
                correctPhone: (value) =>
                  patternPhone.test(value) ||
                  "User phone number. Number should start with code of Ukraine +380",
              },
            }}
            render={({ field }) => (
              <InputTextNew
                fullWidth
                label={"Phone"}
                name={"phone"}
                errors={errors.phone}
                {...field}
                helperText={"+38 (XXX) XXX - XX - XX"}
              />
            )}
          />
        </div>
        <div className={cx("radioWrapper")}>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <RadioComponent
                textLabel={"Select your position"}
                list={positionsList}
                handleChange={handleChange}
                nameRadio={"position"}
                ref={refRadio}
                {...field}
              />
            )}
          />
        </div>
        <div className={cx("fileWrapper")}>
          <Controller
            name="photo"
            control={control}
            rules={{
              required: "Field is required",
            }}
            render={({ field }) => (
              <InputUploadComponent
                errors={errors?.photo}
                name={"photo"}
                onChange={uploadPhoto}
                errorMessages={errors?.photo}
                {...field}
              />
            )}
          />
        </div>
        <div className={cx("wrapperBtn")}>
          {loader ? (
            <Spinner color={"#00BDD3"} />
          ) : (
            <Button disabled={!isDirty}>Sign up</Button>
          )}
        </div>
      </form>
      <NotificationContainer />
    </section>
  );
};
export default AuthBlock;
