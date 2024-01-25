import { Col, Flex, Row, Select } from "antd";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <Row
        align="middle"
        justify="space-between"
        style={{
          padding: "21px",
        }}
      >
        <Col>
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "159px",
                height: "45px",
              }}
            />
          </Link>
        </Col>
        <Col>
          <Flex gap="10px" align="center">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sign-up">SignUp</Link>
            <Link to="/login">Login</Link>
            <Select
              defaultValue="English (UK)"
              style={{
                color: "#8A94A6",
                width: "146px",
                height: "43px",
                fontSize: "12px",
                borderRadius: "16px",
              }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Flex>
        </Col>
      </Row>
    </div>
  );
}
