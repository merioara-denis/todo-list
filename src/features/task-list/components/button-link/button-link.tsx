import React from "react";
import { ButtonProps } from "react-bootstrap/button";
import { Button } from "./button-link.style";

export const ButtonLink: React.FC<ButtonProps> = (props) => <Button {...props} />;
