import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Text = ({ children, type, style, shortText = false }) => {
  return (
    <p style={style} className={shortText ? cx("shortText", type) : cx(type)}>
      {children}
    </p>
  );
};
export default Text;
