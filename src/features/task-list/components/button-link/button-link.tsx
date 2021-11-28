import React from "react";
import { ButtonProps } from "react-bootstrap/button";
import { Button } from "./button-link.style";

interface Props extends Omit<ButtonProps, "onClick"> {
  onClick?: () => void;
}

export const ButtonLink: React.FC<Props> = (props) => <Button {...props} />;
