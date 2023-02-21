import { InputHTMLAttributes, FC } from "react";
import { Input, FormInputLabel, Group } from "./form-input.style";

export type FormType = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormType> = ({ label, ...inputProps }) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputProps.value &&
              typeof inputProps.value === "string" &&
              inputProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
