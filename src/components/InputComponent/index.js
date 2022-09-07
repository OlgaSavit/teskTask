import styles from "./style.module.scss";
import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";
const cx = classNames.bind(styles);
const InputComponent = ({
  required,
  id,
  name,
  label,
  defaultValue,
  helperText,
  error,
  value,
  onChange,
}) => {
  return (
    <TextField
      InputProps={{ inputProps: { min: 2, max: 10 } }}
      className={cx("textField")}
      style={{ width: "100%", color: "red", borderColor: "red" }}
      error={error}
      helperText={helperText}
      required={required}
      id={id}
      label={label}
      defaultValue={defaultValue}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={{
        className: cx("input"),
      }}
    />
  );
};
export default InputComponent;
