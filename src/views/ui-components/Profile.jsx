import React, { Component } from 'react'
import {
  Container,
  Card,
  CardImg,
  CardSubtitle,
  Row,
  Col,
  Button,
  CardBody,
  CardTitle
} from 'reactstrap';

// Imagen
import img7 from '../../assets/images/background/user-bg.jpg';
import img8 from '../../assets/images/users/8.jpg';

export default class Search extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle
              className="mb-0"
            >
              <i className="mdi mdi-pencil-circle mr-2" ></i>
              Ajustes de Perfil
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <Container>
              <Card>
                <CardImg top width="100%" src={img7} alt="Card image profile" />
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Imagen de perfil</CardTitle>
                  <Row className="mt-3">
                    <Col xs="6">
                      <div className="bg-light p-2 border">
                      <img
                        src={img8}
                      />
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="bg-light p-2 border">
                        <Button className="mb-3 btn" outline color="primary">Actualizar imagen de perfil</Button>
                        <CardSubtitle>El formato debe ser JPEG, PNG.</CardSubtitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}
