import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname: "",
       lastname: "",
       email: "",
       password: "",
       confirmPassword:"",
       terms: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTerms = this.handleTerms.bind(this);
   
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleTerms(){
    this.setState({terms: !this.state.terms})
  }
  handleSubmit(e){
    e.preventDefault();
     if (this.state.password === this.state.confirmPassword){
         
       
        const data = this.state
               this.props.userSignupRequest(data);


     }
     else{
       alert("Password and Confirm Password must be same");
     }
          
  }
  



    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
              <div className="p-1">
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  placeholder="Enter First Name" />          
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control type="text" 
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  
                  placeholder="Enter Last Name" />          
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email"
                  name="email" 
                  value={this.state.email}
                  onChange={this.handleChange}
                  
                   placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" 
                    name="password" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  
                  placeholder="Password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password"
                  name="confirmPassword" 
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  
                  placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        name="terms"
                        checked={this.state.terms}
                        onChange={this.handleTerms}
                        label="T&C" />
                </Form.Group>


                <div className="text-center">
                   <Button variant="primary" type="submit">
                     Submit
                   </Button>
                </div>
              </div>

    </Form>
        )
    }
}


SignupForm.propTypes={
  userSignupRequest: PropTypes.func.isRequired
}