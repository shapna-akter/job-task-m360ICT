/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Checkbox, Col, Divider, Flex, Row, message } from "antd";
import googleImg from "../assets/google.png";
import appleImg from "../assets/apple.png";
import smileImg from "../assets/smile.png";
import lockImg from "../assets/lock.png";
import atImg from "../assets/@.png";
import FormInput from "../components/Forms/FormInput";
import Form from "../components/Forms/Form";
import { Link, useNavigate } from "react-router-dom";
import { useUserSignUpMutation } from "../redux/api/authApi";

export default function SignUp() {
  const [userSignUp] = useUserSignUpMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    message.loading("Please Wait...");
    try {
      console.log(data);
      const res = await userSignUp(data);
      if (res) {
        console.log(res);
        message.success("User registered successfully!");
        navigate("/");
      } else {
        return message.error("Wrong credential!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <Row
      align="middle"
      justify="center"
      style={{
        width: "540px",
        margin: "50px auto",
        color: "#8A94A6",
      }}
    >
      <Col
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#323B4B",
            fontSize: "26px",
            marginBottom: "20px",
          }}
        >
          Getting Started
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "medium",
          }}
        >
          Create an account to continue!
        </p>
      </Col>
      <Form submitHandler={onSubmit}>
        <Flex
          justify="space-between"
          align="center"
          style={{
            margin: "30px 0",
          }}
        >
          <Button
            type="default"
            style={{
              background: "#F0F5FA",
              color: "#8A94A6",
              width: "255px",
              height: "58px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img
              src={googleImg}
              alt="Google Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <span>Sign Up with Google</span>
          </Button>
          <Button
            type="default"
            style={{
              background: "#F0F5FA",
              color: "#8A94A6",
              width: "255px",
              height: "58px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img
              src={appleImg}
              alt="Apple Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <span>Sign Up with Apple ID</span>
          </Button>
        </Flex>
        <Divider
          style={{
            width: "540px",
            color: "#8A94A6",
          }}
        >
          OR
        </Divider>
        <Col
          style={{
            margin: "30px 0",
          }}
        >
          <FormInput
            required
            name="email"
            type="email"
            placeholder=" Your Email"
            size="large"
            image={<img src={atImg} alt="Email" />}
          />
        </Col>
        <Col>
          <FormInput
            name="name"
            type="name"
            placeholder="Your Name"
            size="large"
            image={<img src={smileImg} alt="Name" />}
          />
        </Col>
        <Col
          style={{
            margin: "30px 0",
          }}
        >
          <FormInput
            required
            name="password"
            type="password"
            placeholder="@ Create Password"
            size="large"
            image={<img src={lockImg} alt="Password" />}
          />
        </Col>
        <Col>
          <Checkbox
            style={{ color: "#8A94A6", fontSize: "16px", height: "28px" }}
          >
            I agree to the Terms & Conditions
          </Checkbox>
        </Col>
        <Col>
          <Button
            style={{
              width: "100%",
              height: "58px",
              fontSize: "16px",
              borderRadius: "16px",
              marginTop: "30px",
              marginBottom: "35px",
            }}
            type="primary"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Col>
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </Form>
    </Row>
  );
}
