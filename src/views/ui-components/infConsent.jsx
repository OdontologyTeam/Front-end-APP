import React, { Component } from 'react';
import SweetAlert from 'sweetalert2';
import {
    Jumbotron,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Container,
    Button,
    FormGroup, Label, Input, Fade
} from 'reactstrap';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dx: '',
            cc: '',
            place: '',
            fadeIn: false
        };
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.toggle = this.toggle.bind(this);

    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="mb-0">
              <i className="mdi mdi-comment-processing-outline mr-2" ></i>
              Crear Consentimiento Informado Endodoncia
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs="6" sm="4" xs = "12">
                            <FormGroup>
                                <Label className = "text-primary" for="name">Cliente</Label>
                                        <Input type="text" name="name" id="name" placeholder="Ingrese el nombre del cliente" value={this.state.name}
                                            onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4" xs = "12">                            
                            <FormGroup>
                                <Label className = "text-primary" for="Dx">Por presentar</Label>
                                        <Input type="text" name="dx" id="Dx" placeholder="Ingrese Dx" value={this.state.dx}
                                            onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4" xs = "12">                            
                            <FormGroup>
                                <Label className = "text-primary" for="cc">Cédula</Label>
                                        <Input type="number" name="cc" id="cc" placeholder="Ingrese cédula del paciente" value={this.state.cc}
                                            onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4" xs = "12">
                            <FormGroup>
                                <Label className = "text-primary" for="place">Lugar</Label>
                                        <Input type="text" name="place" id="place" placeholder="Ingrese el lugar de nacimiento" value={this.state.place}
                                            onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Button color="primary" onClick={this.toggle}>Generar consentimiento</Button>
                    <Fade in={this.state.fadeIn} tag="div" className="mt-3">
                            <h3 className =  "text-center">Consentimiento</h3>
                            <p>He sido informado(a) por la Doctora María Alejandra Manosalva Estrada que requiero un tratamiento Endodóntico en el diente(s) <u> {this.state.name}</u> </p>
                            <p>Por presentar (Dx) <u>{this.state.dx} </u></p>
                            <p>El objetivo principal del tratamiento de conductos es el retiro del tejido pulpar inflamado o infectado y la posterior limpieza, desinfección y relleno de la cámara pulpar y los conductos radiculares, con un material de selle la cavidad e impida el paso de bacterias y toxinas. Es factible que exista adicionalmente al proceso infeccioso o inflamatorio, un cuadro granulomatoso o quístico que requiera la aplicación de otras técnicas terapéuticas (cirugía). El tratamiento de endodoncia requiere la aplicación de anestesia local de cuyos riesgos también se me ha informado. A pesar de que se efectué correctamente la técnica endodóntica, es posible que la infección o el proceso quístico o granulomatoso no se elimine en su totalidad o que no se logre la limpieza, desinfección o relleno optimo de los conductos radiculares, por lo que puede ser necesario acudir a un retratamiento o a la cirugía periapical al cabo de algunas semanas, meses o años. Es posible que después del tratamiento de Endodoncia  la pieza dental tratada cambie de color y se oscurezca ligeramente o puede debilitarse y tienda a fracturarse, por lo que puede ser necesario realizarle una restauración directa (resina- amalgama), corona y/o insertar refuerzos intraradiculares (pernos o espigos) en un lazo máximo de diez días para evitar la reinfección. Algunas otras complicaciones son: </p>
                            <ul>
                                <li>  Molestias postoperatorias que pueden durar hasta 8 días. </li>
                                <li>Falsas vías en el sistema de conducto radicular que requieren tratamiento adicional (perforaciones).</li>
                                <li>Separación de instrumentos de difícil y a veces de imposible remoción. </li>
                                <li>Inflamación gingival según el estado del paciente. </li>
                                <li>Infección (requiere tomar medicamentos prescritos).</li>
                                <li>Trismus (limitación de la apertura de la boca).</li>
                                <li>Difusión  de materiales de obturación al periápice.</li>
                                <li>Índice de fracaso (si no se lleva a cabo la restauración o rehabilitación adecuada).</li>
                                <li> Extrusión de hipoclorito de sodio al tejido periapical lo cual provoca una reacción inmediata dentro o fuera de             la cavidad oral; como: inflamación, dolor, edema, equimosis, infección y sangrado profundo.</li>
                            </ul>

                            <p>Yo <u>{this.state.name}</u> identificado con cédula de ciudadanía N° <u>{this.state.cc}</u> DE <u>{this.state.place}</u>
                             manifiesto que estoy conforme con la intervención que se me ha propuesto. He leído y comprendido la información anterior. He podido preguntar y aclarar todas mis dudas. Por eso he tomado consciente y libremente la decisión de autorizarla.
                             </p>
                
                            <hr width="40%" align = "left" className = "mt-5"/>
                            <p className = "mb-0">Firma del paciente</p>
                            <p className = "mb-0">N° CC {this.state.cc}</p>
                           
             
                            <hr width="40%" align = "left" className = "mt-5"/>
                            <p className="mb-0">Firma Esp. Endodoncia </p>
                            <p className = "mb-0">N° CC</p>
                            <p>R.P. Nº</p>
                           
                    </Fade> 
                </Container>
            </Jumbotron>
          </CardBody>
        </Card>
      </div>
    )
  }

}
