import styles from "./style.module.scss";
import classNames from "classnames/bind";
import Text from "../Text";
import TooltipComponent from "../TootltipComponent";
import ImageComponent from "../ImageComponent";
const cx = classNames.bind(styles);
const Card = ({ item }) => {
  return (
    <div className={cx("mainWrapper")}>
      <ImageComponent altText={item.name} photo={item.photo} />
      <TooltipComponent title={item.name}>
        <div className={cx("shortText", "name")}>
          <Text shortText={true} type={"p1"}>
            {item.name}
          </Text>
        </div>
      </TooltipComponent>
      <div className={cx("personalInfoWrapper")}>
        <TooltipComponent title={item.position}>
          <div className={cx("shortText")}>
            <Text shortText={true} type={"p1"}>
              {item.position}
            </Text>
          </div>
        </TooltipComponent>
        <TooltipComponent title={item.email}>
          <div className={cx("shortText")}>
            <Text shortText={true} type={"p1"}>
              {item.email}
            </Text>
          </div>
        </TooltipComponent>
        <TooltipComponent title={item.phone}>
          <div className={cx("shortText")}>
            <Text shortText={true} type={"p1"}>
              {item.phone}
            </Text>
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};
export default Card;
