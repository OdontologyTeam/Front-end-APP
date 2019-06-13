import React,{Component} from 'react'
import  './GeneralStory.css'
import {
    FormGroup, 
    Label, 
    Input,
    Row,
    Col,
    Jumbotron,
  } from 'reactstrap';

export default class CmpConsentimientoInformado extends Component{
    render(){

        return(
            <div>
                <Jumbotron>
                  <h2 className="d-none d-sm-block">Consentimiento</h2>
                  <h3 className="d-sm-none">Consentimiento</h3>
                  <FormGroup>
                    <Row form>
                      <Col md={6} className="d-flex  justify-content-start align-items-center" >
                            <Label for="fconsentimiento_id" className="mr-2">Fecha</Label>
                            <Input  type="date" name="fconsentimiento" id="fconsentimiento_id"/>
                      </Col>
                      <Col md={12}>
                        <p>Por medio de la presente doy mi consentimiento para formular y realizar los
                            tratamientos necesarios y demás procedimientos dentales que se consideren
                            necesarios y se hayan acordado.
                            Estoy informado de los riesgos implícitos en los procedimientos clínicos, sus
                            posibles complicaciones y eximo al profesional de cualquier eventualidad que
                            se presente.
                            Estoy informado que todos los tratamientos realizados tienen cuidados de parte
                            mía y que debo asistir a controles cada 4 meses para mantener mi salud bucal
                            y cuidar de los trabajos realizados.
                        </p>
                      </Col>
                      <Col md={12} className="d-flex mb-4 justify-content-start align-items-center">
                        <Col md={6}>
                          <Label for="nombre_consentimiento_id">Nombre</Label>
                          <Input  type="text" name="nombre_consentimiento" id="nombre_consentimiento_id"/>
                        </Col>
                      </Col>
                      <Col md={12}  className="d-flex mb-4 justify-content-end align-items-center">
                          <Col md={6}>
                            <Label for="img_firma">Firma</Label>
                            <div className="contenedor_firma">
                              <img src="./firma.png" alt=""  id="img_firma"/>
                            </div>
                          </Col>
                           
                           <div className="contenedor_huella">
                            <img src="./huella.png" alt=""  id="img_huella"/>
                           </div>
                      </Col>
                      <Col md={12} className="d-flex mb-4 justify-content-start align-items-center">
                        <Col md={6}>
                          <Label for="cedula_consentimiento_id">C.C</Label>
                          <Input type="text" name="cedula_consentimiento" id="cedula_consentimiento_id" maxLength="10"/>
                        </Col>
                      </Col>
                      <Col md={12} className="d-flex mb-4 justify-content-start align-items-center">
                        <Col md={6}>
                          <Label for="nombre_odontologo_id">Odontólogo/a</Label>
                          <Input  type="text" name="nombre_odontologo" id="nombre_odontologo_id"/>
                        </Col>
                      </Col>
                      
                    </Row>
                  </FormGroup>
                </Jumbotron> 
            </div>
        )
    }
}