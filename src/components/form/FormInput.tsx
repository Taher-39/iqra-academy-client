import { Input } from "antd";
import { Controller } from "react-hook-form";

type TFormInputs = {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
};

const FormInput = ({ type, name, label, placeholder }: TFormInputs) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input type={type} id={name} placeholder={placeholder} {...field}  />
        )}
      />
    </div>
  );
};

export default FormInput;
