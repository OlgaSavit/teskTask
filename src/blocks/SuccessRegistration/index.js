import Heading from "../../components/Heading";
import img from "../../img/success.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const SuccessRegistration = () => {
  return (
    <section className={cx("successSection")}>
      <Heading level={1} position={"center"}>
        User successfully registered
      </Heading>
      <div className={cx("wrapperImg")}>
        <img src={img} />
      </div>
    </section>
  );
};
export default SuccessRegistration;
