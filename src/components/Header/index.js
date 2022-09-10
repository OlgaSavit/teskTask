import Button from "../Button";
import Logo from "../../img/Logo.svg";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import ContainerComponent from "../Container";
import { Link } from "react-scroll";
import Text from "../Text";
import TooltipComponent from "../TootltipComponent";
const cx = classNames.bind(styles);
const Header = ({ user, onLogout }) => {
  return (
    <div className={cx("bgWrapper")}>
      <ContainerComponent>
        <div className={cx("wrapper")}>
          <div className={cx("imgWrapper")}>
            <img alt={"Task test logo"} src={Logo} />
          </div>
          <div className={cx("flexBlock")}>
            {user && (
              <div className={cx("welcomeText")}>
                <TooltipComponent title={user.name}>
                  <Text
                    shortText={true}
                    type={"p1"}
                    style={{ marginRight: "10px" }}
                  >
                    Hello, {user.name}
                  </Text>
                </TooltipComponent>
              </div>
            )}
            <div className={cx("flexBlock")}>
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
        </div>
      </ContainerComponent>
    </div>
  );
};
export default Header;
