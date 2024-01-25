/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  image?: React.ReactNode;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  placeholder,
  label,
  required,
  image,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <div style={{ height: "58px" }}>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              style={{
                border: "1px solid #8A94A6",
                height: "100%",
              }}
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              style={{
                border: "1px solid #8A94A6",
                height: "100%",
              }}
              type={type}
              size={size}
              placeholder={placeholder}
              prefix={image}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </div>
  );
};

export default FormInput;
