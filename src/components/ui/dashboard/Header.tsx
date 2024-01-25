import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header: AntHeader } = Layout;
import { SearchOutlined } from "@ant-design/icons";
import notification from "../../../assets/notification.png";

const Header = () => {
  const logOut = () => {};

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader
      style={{
        background: "#fff",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <div>
          <Input
            placeholder="Search"
            style={{
              width: 539,
              height: 54,
              background: "#F0F5FA",
              borderRadius: "14px",
              fontWeight: "bold",
            }}
            suffix={<SearchOutlined style={{ color: "#8A94A6" }} />}
          />
        </div>
        <Flex align="center" justify="center" gap="20px">
          <img src={notification} alt="" style={{
            width: "25px"
          }}/>
          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </Flex>
      </Row>
    </AntHeader>
  );
};

export default Header;
