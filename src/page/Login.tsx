/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Divider, Flex, Row, message } from "antd";
import googleImg from "../assets/google.png";
import appleImg from "../assets/apple.png";
import smileImg from "../assets/smile.png";
import lockImg from "../assets/lock.png";
import atImg from "../assets/@.png";
import FormInput from "../components/Forms/FormInput";
import Form from "../components/Forms/Form";

export default function Login() {
  const onSubmit = async (data: any) => {
    message.loading("Publishing...");
    try {
      console.log(data);
      message.success("Company published successfully");
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
        margin: "auto",
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
            marginTop: "197px",
          }}
        >
          Getting Started
        </h1>
        <p
          style={{
            color: "#8A94A6",
            fontSize: "18px",
            fontWeight: "medium",
            margin: "10px",
          }}
        >
          Create an account to continue!
        </p>
      </Col>
      <Form submitHandler={onSubmit}>
        <Flex justify="space-between" align="center" gap="">
          <Flex
            justify="center"
            align="center"
            gap="5px"
            style={{
              color: "#8A94A6",
              background: "#F0F5FA",
              width: "255px",
              height: "58px",
              borderRadius: "16px",
            }}
          >
            <img
              src={googleImg}
              alt=""
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <p>Sign Up with Google</p>
          </Flex>
          <Flex
            justify="center"
            align="center"
            gap="5px"
            style={{
              color: "#8A94A6",
              background: "#F0F5FA",
              width: "255px",
              height: "58px",
              borderRadius: "16px",
            }}
          >
            <img
              src={appleImg}
              alt=""
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <p>Sign Up with Google</p>
          </Flex>
        </Flex>

        <Divider
          style={{
            color: "#8A94A6",
            width: "540px",
          }}
        >
          OR
        </Divider>
        <Col
          style={{
            margin: "10px 0",
          }}
        >
          <FormInput
            name="email"
            type="email"
            placeholder=" Your Email"
            size="large"
            image={<img src={atImg} alt="Email"/>}
          />
        </Col>
        <Col
          
        >
          <FormInput
            name="name"
            type="name"
            placeholder="Your Name"
            size="large"
            image={<img src={smileImg} alt="Email" />}
          />
        </Col>
        <Col
          style={{
            margin: "10px 0",
          }}
        >
          <FormInput
            name="password"
            type="password"
            placeholder="@ Create Password"
            size="large"
            image={<img src={lockImg} alt="Email" />}
          />
        </Col>
      </Form>
    </Row>
  );
}
