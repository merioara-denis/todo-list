import React from "react";
import { ListGroup } from "react-bootstrap";
import { ButtonLink } from "./components";
import { mock } from "../../mock";

export const TaskList = () => {
  return (
    <ListGroup>
      {mock.map(({ title, id }) => (
        <ListGroup.Item key={id}>
          <ButtonLink variant="link" size="lg" active={id === 2}>
            {title}
          </ButtonLink>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
