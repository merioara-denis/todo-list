import React from "react";
import { Card } from "react-bootstrap";
import { mock } from "../../mock";

export const TaskCard = () => {
  const { id, title, body } = mock[3];

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {`{${id}}`} {title}
        </Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
