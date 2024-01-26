/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message } from "antd";
import FormInput from "../components/Forms/FormInput";
import Form from "../components/Forms/Form";
import { useAddUserMutation } from "../redux/api/UsersApi";

export default function AddUser() {
  const [addUser] = useAddUserMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding...");
    try {
      const res = await addUser(data);
      console.log(res);
      message.success("User added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1
        style={{
          color: "#323B4B",
          fontSize: "26px",
          margin: "48px 0",
        }}
      >
        Add a new user
      </h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            margin: "10px 0",
            width: "50%",
          }}
        >
          <p
            style={{
              fontSize: "18px",
            }}
          >
            User Information
          </p>
          <div
            style={{
              padding: "20px",
            }}
          >
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <FormInput name="name" type="text" size="large" label="Name" />
            </div>
            <div>
              <FormInput name="job" type="text" size="large" label="Job" />
            </div>
          </div>
        </div>
        <div style={{ margin: "10px 0" }}>
          <Button type="primary" htmlType="submit" size="large">
            Add a new user
          </Button>
        </div>
      </Form>
    </div>
  );
}
