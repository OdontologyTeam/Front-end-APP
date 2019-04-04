import React, { Component } from 'react'
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

export default class GeneralStory extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle
              className="mb-0"
            >
              <i className="mdi mdi-arrange-send-backward mr-2" ></i>
              Crear Historia General
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <Container>
              Hello World
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}
