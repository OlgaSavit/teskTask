import styles from "./banner.module.scss";
import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import { Link } from "react-scroll";
const Banner = ({ bgImg, title, text }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className={styles.wrapperBlock}
    >
      <div className={styles.contentCenter}>
        <Heading position={"center"} style={{ color: "white" }} level={1}>
          {title}
        </Heading>
        <Text
          style={{ color: "white", textAlign: "center", marginTop: "14px" }}
          type={"p1"}
        >
          {text}
        </Text>
        <div className={styles.btnWrapper}>
          <Link activeClass="active" to={"SignUpBlock"} duration={100}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
