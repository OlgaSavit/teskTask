import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ContainerComponent = ({ children, type }) => {
  return <div className={cx("container", `${type}`)}>{children}</div>;
};
export default ContainerComponent;
