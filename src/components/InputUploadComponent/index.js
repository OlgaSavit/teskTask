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
  error,
  onChange,
  file,
}) => {
  return (
    <div>
      <div className={error ? cx("error", "wrapper") : cx("wrapper")}>
        <div className={cx("btn")}>
          <Text type={"p1"}>Upload</Text>
          <input
            name={name}
            type="file"
            accept="image/jpeg,image/jpg"
            onChange={onChange}
          />
        </div>
        <div className={cx("wrapper_input")}>
          {file?.length ? (
            <Text type={"p1"} shortText={true} style={{ textAlign: "start" }}>
              {file[0].name}
            </Text>
          ) : (
            <Text type={"p1"} style={{ color: "#7E7E7E" }}>
              Upload your photo
            </Text>
          )}
        </div>
      </div>
      {error?.map((item, ind) => {
        return (
          <p key={ind} className={cx("errorText")}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
export default InputUploadComponent;
