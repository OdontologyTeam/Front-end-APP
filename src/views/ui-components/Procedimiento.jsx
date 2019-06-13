import React,{Component} from 'react'
import { Container,
        Card,
        CardBody,
        CardTitle,
        Button, 
        Form, 
        FormGroup, 
        Label, 
        Input,
        FormText,
        Row,
        Col,
        Jumbotron,
        Table} from 'reactstrap'

import './GeneralStory.css'
export default class CmpProcedimiento extends Component {
    render(){
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Jumbotron>
                            <h2 className="d-none d-sm-block">Datos Procedimiento</h2>
                            <h3 className="d-sm-none">Datos Procedimiento</h3>
                            <Row>
                                <Col md={4}>
                                    <Label for="fecha_procedimiento">Fecha</Label>
                                    <Input  type="date" name="fecha_procedimiento" id="fecha_procedimiento"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="hora_entrada">Hora Entrada</Label>
                                    <Input type="time" name="hora_entrada" id="hora_entrada"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="hora_salida">Hora Salida</Label>
                                    <Input type="time" name="hora_salida" id="hora_salida"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <Label for="nombre_paciente">Paciente</Label>
                                    <Input type="text" name="nombre_paciente" id="nombre_paciente"></Input>
                                </Col>
                                <Col md={4}>
                                    <Label for="cedula_paciente">Cedula</Label>
                                    <Input type="text" name="cedula_paciente" id="cedula_paciente" maxLength="10" />
                                </Col>
                                <Col md={4} >
                                    <Label for="diente_paciente">Diente</Label>
                                    <Input type="text" name="diente_paciente" id="diente_paciente" maxLength="2"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <Label for="diagnostico_inicial">Diagnóstico Inicial</Label>
                                    <Input type="textarea" name="diagnostico_inicial" id="diagnostico_inicial"  className="areaLimitHeight"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="rx_inicial">Rx Inicial</Label>
                                    <Input type="textarea" name="rx_inicial" id="rx_inicial" className="areaLimitHeight"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="pruebas_sensibilidad">Pruebas Sensibilidad</Label>
                                    <Input type="textarea" name="pruebas_sensibilidad" id="pruebas_sensibilidad" className="areaLimitHeight"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <Label for="diagnostico_final">Diagnóstico Final</Label>
                                    <Input type="textarea" name="diagnostico_final" id="diagnostico_final" className="areaLimitHeight"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="pronostico">Pronóstico</Label>
                                    <Input type="textarea" name="pronostico" id="pronostico" className="areaLimitHeight"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="tecnica_anestesica">Tecnica Anestesica</Label>
                                    <Input type="textarea" name="tecnica_anestesica" id="tecnica_anestesica" className="areaLimitHeight"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                     <Label for="carpul">Carpul</Label>
                                     <Input type="text" name="carpul" id="carpul"/>
                                </Col>
                                <Col md={4}>
                                     <Label for="tipo_anestesia">Tipo de Anestesia</Label>
                                     <Input type="text" name="tipo_anestesia" id="tipo_anestesia"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="tipo_aislamiento">Tipo de Anestesia</Label>
                                     <Input type="text" name="tipo_aislamiento" id="tipo_aislamiento"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <Label for="apertura_cameral">Apertura Cameral-Localización Conductos</Label>
                                    <Input type="textarea" name="apertura_cameral" id="apertura_cameral" className="areaLimitHeight"/>
                                </Col>
                                <Col md={6}>
                                    <Label for="longitud_trabajo">Determinación de Longitud de Trabajo</Label>
                                    <Input type="textarea" name="longitud_trabajo" id="longitud_trabajo" className="areaLimitHeight"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                     <Label for="sistema_limas">Instrumentación, Sistema de Limas Utilizado</Label>
                                     <Input type="text" name="sistema_limas" id="sistema_limas"/>
                                </Col>
                                <Col md={6}>
                                     <Label for="descripcion_limas">Descripción</Label>
                                     <Input type="text" name="descripcion_limas" id="descripcion_limas"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <Label for="irrigacion">Irrigación</Label>
                                    <Input type="text" name="irrigacion" id="irrigacion"/>
                                 </Col>
                                 <Col md={6}>
                                    <Label for="secado_conducto">Secado Conducto</Label>
                                    <Input type="text" name="secado_conducto" id="secado_conducto"/>
                                 </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <Label for="obturacion">Tecnica de Obturación</Label>
                                    <Input type="text" name="obturacion" id="obturacion"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="cono_principal">Cono Principal</Label>
                                    <Input type="text" name="cono_principal" id="cono_principal"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="accesorios">Accesorios</Label>
                                    <Input type="text" name="accesorios" id="accesorios"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <Label for="cemento_endodontico">Cemento Endodontico</Label>
                                    <Input type="text" name="cemento_endodontico" id="cemento_endodontico"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="obturacion_base">Obturación Base</Label>
                                    <Input type="text" name="obturacion_base" id="obturacion_base"/>
                                </Col>
                                <Col md={4}>
                                    <Label for="obturacion_temporal">Obturación Temporal</Label>
                                    <Input type="text" name="obturacion_temporal" id="obturacion_temporal"/>
                                </Col>
                            </Row>  
                            <Row className="mt-4">
                                <Col>
                                    <Label for="recomendaciones">Complicaciones Y/O Eventos Adversos, Recomendaciones </Label>
                                    <Input type="textarea" name="recomendaciones" id="recomendaciones" className="areaLimitHeight"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12} className="d-flex mb-4 justify-content-start align-items-center">
                                    <Col md={6}>
                                    <Label for="nombre_odontologo_id">Odontólogo/a</Label>
                                    <Input  type="text" name="nombre_odontologo" id="nombre_odontologo_id"/>
                                    </Col>
                                </Col>
                                <Col md={12} className="d-flex mb-4 justify-content-start align-items-center">
                                    <Col md={6}>
                                    <Label for="cedula_consentimiento_id">C.C</Label>
                                    <Input type="text" name="cedula_consentimiento" id="cedula_consentimiento_id" maxLength="10"/>
                                    </Col>
                                </Col>
                                <Col md={12}  className="d-flex mb-4 justify-content-around align-items-center">
                                    <Col md={6}>
                                        <Label for="img_firma">Firma</Label>
                                        <div className="contenedor_firma">
                                            <img src="./firma.png" alt=""  id="img_firma"/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contenedor_huella">
                                            <img src="./stamp.png" alt=""  id="img_huella"/>
                                        </div>
                                    </Col>
                                </Col>
                                
                                
                            </Row>
                        </Jumbotron>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}