import Button from "../Button";
import Logo from "../../img/Logo.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import ContainerComponent from "../Container";
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <div className={cx("bgWrapper")}>
      <ContainerComponent>
        <div className={cx("wrapper")}>
          <div>
            <img src={Logo} />
          </div>
          <div>
            <Button style={{ marginRight: "10px" }}>Users</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
export default Header;
