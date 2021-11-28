import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { TaskList, TaskCard, CreateTask } from "features";
import { Root, Header, Title } from "./index.style";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <Container>
        <Header className="d-flex flex-row align-items-center">
          <Title className="flex-grow-1">ToDo List</Title>
          <CreateTask />
        </Header>
        <Row>
          <Col xs={8}>
            <TaskList />
          </Col>
          <Col xs={4}>
            <TaskCard />
          </Col>
        </Row>
      </Container>
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
