import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { TaskList, TaskCard } from "features";
import { Root, Title } from "./index.style";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <Container>
        <Row>
          <Col>
            <Title>ToDo List</Title>
          </Col>
        </Row>
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
