import defaultProfile from "../../img/defaultprovile.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const ImageComponent = ({ photo = defaultProfile, altText = "image" }) => {
  return (
    <div className={cx("wrapperImg")}>
      <img alt={altText} src={photo} />
    </div>
  );
};
export default ImageComponent;
