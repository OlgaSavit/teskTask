import styles from "./style.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Text from "../Text";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const InputUploadComponent = ({
  required,
  id,
  name,
  label,
  defaultValue,
  errorMessage,
  onChange,

  errors,
  ...field
}) => {
  const [file, setFile] = useState({});
  return (
    <div>
      <div className={errors ? cx("error", "wrapper") : cx("wrapper")}>
        <div className={cx("btn")}>
          <Text type={"p1"}>Upload</Text>
          <input
            name={name}
            type="file"
            accept="image/jpeg,image/jpg"
            onChange={(e) => {
              onChange(e.target.files);
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className={cx("wrapper_input")}>
          {file?.name ? (
            <Text type={"p1"} shortText={true} style={{ textAlign: "start" }}>
              {file.name}
            </Text>
          ) : (
            <Text type={"p1"} style={{ color: "#7E7E7E" }}>
              Upload your photo
            </Text>
          )}
        </div>
      </div>
      {errors && <p className={cx("errorText")}>{errors.message}</p>}
    </div>
  );
};
export default InputUploadComponent;
