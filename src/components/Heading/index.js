import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const HeadingComponent = ({ children, level, position, style }) => {
  const renderTag = (level) => {
    switch (level) {
      case 1: {
        return (
          <h1
            style={{ textAlign: position, ...style }}
            className={cx(`h${level}`)}
          >
            {children}
          </h1>
        );
      }
      case 2: {
        return (
          <h2 style={{ textAlign: position }} className={cx(`h${level}`)}>
            {children}
          </h2>
        );
      }
      case 3: {
        return (
          <h3 style={{ textAlign: position }} className={cx(`h${level}`)}></h3>
        );
      }
      case 4: {
        return (
          <h4 style={{ textAlign: position }} className={cx(`h${level}`)}></h4>
        );
      }
      case 5: {
        return (
          <h5 style={{ textAlign: position }} className={cx(`h${level}`)}></h5>
        );
      }
    }
  };

  return renderTag(level);
};
export default HeadingComponent;
