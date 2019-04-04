import React, { Component } from 'react'
import {
  Container,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

export default class Search extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle
              className="mb-0"
            >
              <i className="mdi mdi-priority-high mr-2" ></i>
              Crear Historia Completa
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
