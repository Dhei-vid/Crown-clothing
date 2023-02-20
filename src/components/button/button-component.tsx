import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button-styles";

export enum button_type_classes {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted-button",
}

const getButton = (button_type = button_type_classes.base): typeof BaseButton =>
  ({
    [button_type_classes.base]: BaseButton,
    [button_type_classes.google]: GoogleSignInButton,
    [button_type_classes.inverted]: InvertedButton,
  }[button_type]);

export type ButtonProps = {
  children?: ReactNode;
  isLoading: false;
  button_type: button_type_classes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  button_type,
  ...otherprops
}) => {
  const CustomButton = getButton(button_type);
  return (
    <CustomButton disabled={isLoading} {...otherprops}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
