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
  CardTitle,
  CardHeader,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// Imagenes
import img7 from '../../assets/images/background/user-bg.jpg';
import img8 from '../../assets/images/users/maral.jpg';

export default class Search extends Component {
  state = {
    // Estados del formulario
    username: 'María Alejandra Manosalva',
    email: 'user@yourdomail.com',
    password: '',
    confirmPassword: ''
  }

  /**
   * Handlers para obtener los valores de cada Input
   */
  handleChangeUser = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleChangeConfPassword = event => {
    this.setState({
      confirmPassword: event.target.value,
    })
  }

  // Metodo que remueve el evento por default del formulario
  handleSubmitForm = event => {
    event.preventDefault()
  }

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
                    <Col>
                      <Row className="bg-light p-2 border d-flex">
                        <Col 
                          sm={{ size: 'auto', offset: 1 }}
                          style={{marginLeft: 0}}
                        >
                          <img
                            sm={{ size: 'auto', offset: 1 }}
                            src={img8}
                            alt="Foto de perfil"
                            width={96}
                            height={96}
                            style={{objectFit: "cover"}}
                          />
                        </Col>
                        <Col className="mt-2" sm={{ size: 'auto', offset: 1 }}> 
                          <Button className="mb-3 btn" outline color="primary">Actualizar foto de perfil</Button>
                          <CardSubtitle>El formato debe ser JPEG, PNG.</CardSubtitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardHeader tag="h5">Cambiar los datos de tu cuenta</CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmitForm}>
                    <FormGroup>
                      <Label>Nombre</Label>
                      <Input 
                        type="next"   
                        name="username"
                        value={this.state.username} 
                        onChange={this.handleChangeUser}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input 
                        type="email"   
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChangeEmail}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Nueva contraseña</Label>
                      <Input 
                        type="password" 
                        placeholder="Introducir nueva contraseña"
                        value={this.state.password} 
                        onChange={this.handleChangePassword}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Confirmar contraseña</Label>
                      <Input 
                        type="password"   
                        name="confirmPassword"
                        placeholder="Confirmar la constraseña escrita anteriormente"
                        value={this.state.confirmPassword} 
                        onChange={this.handleChangeConfPassword}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter className="text-muted">
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}
