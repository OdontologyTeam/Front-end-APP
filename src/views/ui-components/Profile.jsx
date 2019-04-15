import React, { Component } from 'react'
import Swal from 'sweetalert2'
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


  // Metodo para Submit
  handleSubmitForm = event => {
    // Elimina el evento por default
    event.preventDefault()
    const { email, 
            username,
            password,
            confirmPassword 
          } = this.state
    
    // Verificar campos vacios
    if(password !== '' && confirmPassword !== '' && email !== '' && username !== '') {
      // Sí la contraseña y la confirmación coinciden
      if(password !== confirmPassword) {
        // Sweet Alert 
        Swal.fire({
          title: '¡Oops!',
          text: 'Las contraseñas no coinciden',
          type: 'error',
          confirmButtonText: 'Entendido'
        })
      }
      // Actualización exitosa
      Swal.fire({
        title: '¡Excelente!',
        text: 'Tú perfil ha sido actualizado satisfactoriamente',
        type: 'success'
      })
    }
    else {
      // Sweet Alert 
      Swal.fire({
        title: '¡Alto ahí!',
        text: 'No puedes dejar espacios vacios',
        type: 'warning'
      })
    }
  }
  
  

  render() {

    const {
      email,
      username,
      password,
      confirmPassword
    } = this.state

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
                        value={username} 
                        onChange={this.handleChangeUser}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input 
                        type="email"   
                        name="email"
                        value={email} 
                        onChange={this.handleChangeEmail}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Nueva contraseña</Label>
                      <Input 
                        type="password" 
                        placeholder="Introducir nueva contraseña"
                        value={password} 
                        onChange={this.handleChangePassword}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Confirmar contraseña</Label>
                      <Input 
                        type="password"   
                        name="confirmPassword"
                        placeholder="Confirmar la constraseña escrita anteriormente"
                        value={confirmPassword} 
                        onChange={this.handleChangeConfPassword}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button 
                        className="btn" 
                        color="success"
                      >
                          Guardar
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}
