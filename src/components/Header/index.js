import Button from "../Button";
import Logo from "../../img/Logo.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import ContainerComponent from "../Container";
import { Link } from "react-scroll";
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
            <Link activeClass="active" to={"UsersBlock"} duration={100}>
              <Button style={{ marginRight: "10px" }}>Users</Button>
            </Link>
            <Link activeClass="active" to={"SignUpBlock"} duration={100}>
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
export default Header;
