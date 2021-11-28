import styled from "styled-components";
import { Button as BootstrapButton } from "react-bootstrap";

export const Button = styled(BootstrapButton)`
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.active {
    color: #4c4c4c;

    &:hover {
      cursor: default;
    }
  }

  &:focus {
    box-shadow: none;
  }
`;
