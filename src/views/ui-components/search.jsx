/**
 * @author Andrés Largo <andresf.largo@gmail.com>
 */
import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Table,
  Container,
  Form,
  Label
} from "reactstrap";

/** 
 * @public
 */
export default class Search extends Component {
/**
* @constructs Search
* @param props
*/
  constructor(props) {
    super(props);

    this.state = {
      jsonResponse: [

        {
          "paciente": "José Luis",
          "lugar": "Bogotá",
          "ocupación": "Desempleado",
          "cedula": 1012
        }

      ]

    };
  }
/**
 * @description Render view.
 * @returns {view}
 */
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="mb-0">
              <i className="mdi mdi-pencil-circle mr-2" />
              Buscar Historias
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <Container>
              <div className="d-flex align-items-center">
                <Form className="col-12">
                  <FormGroup>
                    <Label for="exampleEmail">
                      Ingresa el nombre o la cédula
                    </Label>
                    <Input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Ingresa un dato"
                    />
                  </FormGroup>
                </Form>
              </div>
              <Table className="no-wrap v-middle" responsive>
                <thead>
                  <tr className="border-0">
                    <th className="border-0">Paciente</th>
                    <th className="border-0">Lugar</th>
                    <th className="border-0">Ocupación</th>
                    <th className="border-0">Cédula</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.jsonResponse.map(dynamicData => (
                    <tr className="trow">
                      <td> {dynamicData.paciente} </td>
                      <td> {dynamicData.lugar} </td>
                      <td> {dynamicData.ocupación} </td>
                      <td> {dynamicData.cedula} </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </CardBody>
        </Card>
      </div>
    );
  }
}
