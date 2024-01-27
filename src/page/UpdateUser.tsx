/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message } from "antd";
import FormInput from "../components/Forms/FormInput";
import Form from "../components/Forms/Form";
import { useUpdateUserMutation, useUserQuery } from "../redux/api/UsersApi";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const { data } = useUserQuery(id);
  const [UpdateUser] = useUpdateUserMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding...");
    try {
      const res = await UpdateUser({ body: data }).unwrap();
      console.log(res);
      message.success("User updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    name: data?.name || "",
    job: data?.job || "",
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
        Update a new user
      </h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
