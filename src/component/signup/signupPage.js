import React,{Component} from 'react';
import {Form,FormControl,FormGroup,Button,Col,Checkbox} from 'react-bootstrap';

const signup = ()=>{
  return(
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass="ControlLabel" sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass="ControlLabel" sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass="ControlLabel" sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="confirm password" placeholder="Password" />
        </Col>
      </FormGroup>


      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign up
          </Button>
        </Col>
      </FormGroup>
    </Form>

  );
};
export default signup;
