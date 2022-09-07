import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ImageComponent = ({ photo }) => {
  return (
    <div className={cx("wrapperImg")}>
      <img src={photo} />
    </div>
  );
};
export default ImageComponent;
