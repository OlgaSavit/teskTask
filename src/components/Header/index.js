import Button from "../Button";
import Logo from "../../img/Logo.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import ContainerComponent from "../Container";
import { Link } from "react-scroll";
import Text from "../Text";
const cx = classNames.bind(styles);
const Header = ({ user, onLogout }) => {
  return (
    <div className={cx("bgWrapper")}>
      <ContainerComponent>
        <div className={cx("wrapper")}>
          <div className={cx("imgWrapper")}>
            <img src={Logo} />
          </div>
          <div>
            {user && (
              <Text type={"p1"} style={{ marginRight: "10px" }}>
                hello, {user.name}
              </Text>
            )}
            <Link activeClass="active" to={"UsersBlock"} duration={100}>
              <Button style={{ marginRight: "10px" }}>Users</Button>
            </Link>
            {user ? (
              <Button onClick={onLogout}>Logout</Button>
            ) : (
              <Link activeClass="active" to={"SignUpBlock"} duration={100}>
                <Button>Sign up</Button>
              </Link>
            )}
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
export default Header;
