import styles from "./style.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const Button = ({
  children,
  type = "yellow",
  disabled = false,
  style = {},
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={cx("btn", `${type}`)}
    >
      {children}
    </button>
  );
};
export default Button;
Button.prototype = {
  children: PropTypes.element,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any,
};
