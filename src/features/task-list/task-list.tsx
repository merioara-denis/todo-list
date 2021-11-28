import React from "react";
import { ListGroup } from "react-bootstrap";
import { TaskItem } from "./features";
import { mock } from "../../mock";

export const TaskList = () => {
  return (
    <ListGroup>
      {mock.map((task) => (
        <ListGroup.Item key={task.id}>
          <TaskItem {...task} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
