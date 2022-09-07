import styles from "./style.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const Text = ({ children, type, style, shortText = false }) => {
  return (
    <p style={style} className={shortText ? cx("shortText", type) : cx(type)}>
      {children}
    </p>
  );
};
export default Text;
Text.prototype = {
  children: PropTypes.element,
  type: PropTypes.string,
  style: PropTypes.any,
};
