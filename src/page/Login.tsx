import { Divider, Flex } from "antd";
import googleImg from "../assets/google.png";
import appleImg from "../assets/apple.png";

export default function Login() {
  return (
    <div style={{
      width: "540px",
      margin: "auto",
    }}>
      <div>
        <h1
          style={{
            color: "#323B4B",
            fontSize: "26px",
            textAlign: "center",
            marginTop: "197px",
          }}
        >
          Getting Started
        </h1>
        <p
          style={{
            color: "#8A94A6",
            fontSize: "18px",
            textAlign: "center",
            fontWeight: "medium",
            margin: "10px",
          }}
        >
          Create an account to continue!
        </p>
      </div>
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
          width: "540px"
        }}
      >
        OR
      </Divider>
    </div>
  );
}
