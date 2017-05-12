import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <TextField floatingLabelText="Correo" required/>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <TextField floatingLabelText="Contraseña" type="password" required/>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <Link to="/orders/new">
              <RaisedButton label="Iniciar sesión" primary={true}/>
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
