import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { Col, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getUserList } from "../../api/users";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
const cx = classNames.bind(styles);
const CardBlock = ({ successAddUser }) => {
  const [userList, setUserList] = useState([]);
  const [params, setParams] = useState({ page: 1, count: 6, totalPage: null });
  const [loader, setLoader] = useState(false);
  const fetchUsers = (params) => {
    setLoader(true);
    getUserList(params)
      .then((res) => {
        if (res.status === 200) {
          let { users, page, total_pages } = res.data;
          setUserList(users);
          setParams({ ...params, page: page, totalPage: total_pages });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    fetchUsers(params);
  }, []);
  useEffect(() => {
    successAddUser && fetchUsers({ page: 1, count: 6, totalPage: null });
  }, [successAddUser]);
  const loadMoreUsers = (params) => {
    let newParams = { ...params, page: params.page + 1 };
    setLoader(true);
    getUserList(newParams)
      .then((res) => {
        if (res.status === 200) {
          let { users, page, total_pages } = res.data;
          setUserList([...userList, ...users]);
          setParams({ ...params, page: page, totalPage: total_pages });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <section id={"UsersBlock"} className={cx("cardSection")}>
      <Heading level={1} position={"center"}>
        Working with GET request
      </Heading>
      <Row className={cx("wrapper-row")}>
        {userList.map((item) => {
          return (
            <Col className={cx("column")} key={item.id} lg={4} md={6}>
              <Card item={item} />
            </Col>
          );
        })}
      </Row>

      <div className={cx("wrapperBtn")}>
        {loader ? (
          <Spinner color={"#00BDD3"} />
        ) : (
          <>
            {params.page !== params.totalPage && (
              <Button onClick={() => loadMoreUsers(params)} type={"yellow"}>
                {"Show more"}
              </Button>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default CardBlock;
