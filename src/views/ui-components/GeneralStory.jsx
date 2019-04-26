import React, { Component } from 'react'
import  './GeneralStory.css'
import {
  Container,
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
  Table
} from 'reactstrap';

export default class GeneralStory extends Component {
  state={
    itemMedicos:[],
    itemOdontologicos:[],
    text:'',
    text2:'',
    ant_medicos:'tratamiento medico',
    ant_odontologicos:'hemorragias'
  }
  //Zona de funciones//

  //Agrega un antecedente médico con su respectiva observación
  onClickAddMe=()=>{ 
    if(!this.state.text.length)
    {
      return alert("Debe ingresar una observacion");
    }
    const newItemMedico ={
        text: this.state.text,
        ante_medicos: this.state.ant_medicos,
        id:Date.now()
    }
    this.setState(state=>({
      itemMedicos: state.itemMedicos.concat(newItemMedico),
      text:''
    }))
    
  }


  //Evento change textarea antecendentes medicos
  handleChange=(e)=>{
    this.setState({text:e.target.value})
  }
  //Evento change texarea antecendentes odontologicos
  handleChangeAreaOdo=(e)=>{
    this.setState({text2:e.target.value})
  }
  //evento select antecedentes medicos
  handleChangeSelectMedicos=(e)=>{
    
    this.setState({ant_medicos:e.target.value})
  }
  //evento select antecedentes odontologicos
  handleChangeSelectOdontologicos=(e)=>{
    this.setState({ant_odontologicos:e.target.value})
  }
  //Agrega un antecedente odontológico con su respectiva observación
  onClickAddOdo=()=>{
    if(!this.state.text2.length)
    {
      return alert("Debe ingresar una observacion");
    }
    const newItemOdontologico ={
        text2: this.state.text2,
        ante_odontologicos: this.state.ant_odontologicos,
        id:Date.now()
    }
    this.setState(state=>({
      itemOdontologicos: state.itemOdontologicos.concat(newItemOdontologico),
      text2:''
    }))
  }


  //Fin Zona de Funciones//
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
              <Row>
                <Col md={10}>
                  <h1 className="text-center p-3 font-weight-bold">MARIA ALEJANDRA MANOSALVA ESTRA</h1>
                  <h2 className="text-center p-3 font-weight-bold">OD. ESPECIALISTA EN ENDODONCIA USTA</h2>
                </Col>
                <Col md={2}>
                  <div className="contenedor_logo">
                    <img src="./logo.png" alt="" id="img_logo"/>
                  </div>
                </Col>
              </Row>
              
              
              <Form>
                <Jumbotron>
                  <h2 className="mb-4">Datos Personales</h2>
                 <FormGroup>
                   <Row form>
                      <Col md={4}>
                        <Label for="nombre_id">Nombre</Label>
                        <Input  type="text" name="nombre_id" id="nombre_id"/>
                      </Col>
                      <Col md={4}>
                        <Label for="cedula_id">Cedula</Label>
                        <Input type="number" name="cedula" id="cedula_id"/>
                      </Col>
                      <Col md={4}>
                        <Label for="id_lugarExpedicion">Lugar Expedición</Label>
                        <Input type="select"  className="pdbd" name="lugar_expedicion" id="id_lugarExpedicion" />
                      </Col>
                    </Row>
                    <Row form className="mt-4">
                      <Col md={4}>
                        <Label for="fnacimiento_id">Fecha Nacimiento</Label>
                        <Input  type="date" name="fnacimiento" id="fnacimiento_id"/>
                      </Col>
                      <Col md={4}>
                        <Label for="id_lugarNacimiento">Lugar Nacimiento</Label>
                        <Input type="select"  className="pdbd" name="lugar_Nacimiento" id="id_lugarNacimiento" />
                      </Col>
                      <Col md={4}>
                        <Label for="direccion_id">Dirección</Label>
                        <Input type="text" name="direccion" id="direccion_id"/>
                      </Col>
                    </Row>
                    <Row form className="mt-4">
                        <Col md={4}>
                          <Label for="telefono_id">Teléfono</Label>
                          <Input type="number" name="telefono" id="telefono_id"/>
                        </Col>
                        <Col md={4}>
                          <Label for="celular_id">Celular</Label>
                          <Input type="number" name="celular" id="celular_id"/>
                        </Col>
                        <Col md={4}>
                          <Label for="ocupacion_id">Ocupación</Label>
                          <Input type="select" className="pdbd" name="ocupacion" id="ocupacion_id"/>
                        </Col>
                    </Row>
                 </FormGroup>
                </Jumbotron>
                <Jumbotron>
                  <h2 className="mb-4">Antecedentes Médicos y Odontológicos</h2>
                  <FormGroup>
                    <Row form>
                        <Col md={6}>
                          <Label for="ante_medicos_id">Seleccione un Antecedente Médico</Label>
                          <Input onChange={this.handleChangeSelectMedicos} type="select"  name="ante_medicos" id="ante_medicos_id">
                            <option value="tratamiento medico">Esta actualmente en Tratamiento Médico</option>
                            <option value="Farmacológicos">Le han aplicado Anestesia</option>
                            <option value="Familiares">Problemas de Presión Arterial</option>
                            <option value="Ginecoobstetricos">Enfermedades del Corazón</option>
                            <option value="Tóxicos">Hepatitis</option>
                            <option value="Tóxicos">Alergias</option>
                            <option value="Tóxicos">Diabetes</option>
                            <option value="Tóxicos">Enfermedades Reumáticas</option>
                            <option value="Tóxicos">Enfermedades Respiratorias</option>
                            <option value="Tóxicos">Fármacos que Consume</option>
                            <option value="Otros">Otras Enfermedades</option>
                          </Input>
                          <Label for="observaciones_med_id" className="mt-4">Observaciones</Label>
                          <Input type="textarea" onChange={this.handleChange} name="observaciones_med" id="observaciones_med_id" className="areaLimitHeight pdbd"/>
                          <Button color ="primary" onClick={this.onClickAddMe} className="mt-2">
                            ADD
                          </Button>
                          <ListaAntecedentesMedicos items={this.state.itemMedicos}/>
                        </Col>
                        <Col md={6}>
                          <Label for="ante_odontologico_id">Seleccione un Antecedente Odontológico</Label>
                          <Input onChange={this.handleChangeSelectOdontologicos}  type="select" className="pdbd" name="ante_odontologico" id="ante_odontologico_id">
                            <option value="hemorragias">Hemorragias</option>
                            <option value="dolores" >Dolores</option>
                            <option value="herpeslabial">Herpes labial</option>
                            <option value="fracturas">Fracturas</option>
                            <option value="infecciones">Infecciones</option>
                            <option value="bloqueoarticular">Bloqueo Articular</option>
                            <option value="otros">Otros</option>
                          </Input>
                          <Label for="observaciones_odo_id" className="mt-4">Descripción</Label>
                          <Input type="textarea" onChange={this.handleChangeAreaOdo} name="observaciones_odo" id="observaciones_odo_id" className="areaLimitHeight pdbd"/>
                          <Button color ="primary" onClick={this.onClickAddOdo} className="mt-2">
                            ADD
                          </Button>
                          <ListaAntecedentesOdontologicos items={this.state.itemOdontologicos}/>
                        </Col>
                    </Row>
                  </FormGroup>
                </Jumbotron>
                <Jumbotron>
                  <h2 className="mb-4">Odontograma</h2>
                  <FormGroup>
                    <Row form>
                      <Col md={6}>
                        <p>Heramienta en construcción</p>
                      </Col>
                      <Col md={6}>
                        <p>Heramienta en construcción</p>
                      </Col>
                      <Col md={12}>
                        <Label for="observaciones_odontograma_id">Observaciones</Label>
                        <Input type="textarea"  name="observaciones_odontograma" id="observaciones_odontograma_id" className="areaLimitHeight pdbd"/>
                      </Col>
                    </Row>
                  </FormGroup>
                </Jumbotron>
                <Jumbotron>
                  <h2 className="mb-4">Estado de Cuenta y Evolución</h2>
                  <FormGroup>
                    <div className="table-responsive">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>FECHA</th>
                            <th>TRATAMIENTO REALIZADO</th>
                            <th>VALOR</th>
                            <th>ABONO</th>
                            <th>SALDO</th>
                            <th>FIRMA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>18/04/2019</td>
                            <td>Limpieza General</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>100000</td>
                            <td>Carlos G.</td>
                          </tr>
                          <tr>
                            <td>18/04/2019</td>
                            <td>Limpieza General</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>100000</td>
                            <td>Carlos G.</td>
                          </tr>
                          <tr>
                            <td>18/04/2019</td>
                            <td>Limpieza General</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>100000</td>
                            <td>Carlos G.</td>
                          </tr>
                          <tr>
                            <td>18/04/2019</td>
                            <td>Limpieza General</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>100000</td>
                            <td>Carlos G.</td>
                          </tr>
                      </tbody>
                    </Table>
                  </div>
                  </FormGroup>
                </Jumbotron>
                <Jumbotron>
                  <h2 className="mb-4">Consentimiento Informado</h2>
                  <FormGroup>
                    <Row form>
                      <Col md={6} className="d-flex  justify-content-start align-items-center" >
                            <Label for="fconsentimiento_id">Fecha</Label>
                          <Col md={5}>
                            <Input  type="date" name="fconsentimiento" id="fconsentimiento_id"/>
                          </Col>
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
                          <Input type="number" name="cedula_consentimiento" id="cedula_consentimiento_id"/>
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
              </Form>
              <Row>
                <Col md={12} className="text-center">
                  <h3><span className="font-weight-bold">Dirección:</span> Calle 43 #29-13 Edificio Tempo II, con 201</h3>
                  <h3><span className="font-weight-bold">Celular y WhatsApp:</span> 3022424742</h3>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}

function ListaAntecedentesMedicos(props){
  return(
    <ul className="mt-2"> 
      {
        props.items.map((item)=>{
         return  <li key={item.id}>{item.ante_medicos}: {item.text}</li>
        })
      }
    </ul>
    )
  }

 function ListaAntecedentesOdontologicos(props) {
   return(
     <ul className="mt-2">
      {
        props.items.map((item)=>{
          return <li key={item.id}>{item.ante_odontologicos}: {item.text2}</li>
        })
      }
     </ul>
   ) 
 }
