import React, { FormHTMLAttributes } from "react";
import { Button } from "../Button/Button";
import "./Form.css";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, ...props }) => {
  return (
    <form className="storybook-form" onSubmit={onSubmit} {...props}>
      {children}
      <Button type="submit" label="送信" primary />
    </form>
  );
};
