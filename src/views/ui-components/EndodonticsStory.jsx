import React, { Component } from 'react'
import {
  Container,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

import CmpGeneralStory from './GeneralStory'
import GeneralStory from './GeneralStory';
import CmpProcedimiento from './Procedimiento'
export default class Search extends Component {
  render() {
    return (
      <div>
        <GeneralStory tipo="Historia Endodoncia"/>
        <Card>
          <CardBody>
            <CardTitle
              className="mb-0"
            >
              <i className="mdi mdi-arrange-send-backward mr-2" ></i>
              Procedimiento
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <Container>
              <CmpProcedimiento/>   
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}
