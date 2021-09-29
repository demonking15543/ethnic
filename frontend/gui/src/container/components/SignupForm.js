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
       terms: false,
       errors: {},
       isLoading: false
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
    this.setState({errors: {}, isLoading:true})
    e.preventDefault();
     if (this.state.password === this.state.confirmPassword){
         
              
                const data = this.state
               this.props.userSignupRequest(data)
               .then({})
               .catch((err)=>{
                 this.setState({errors:err.response.data, isLoading:false})
               })


                 
                
     


     }
     else{
      this.setState({isLoading:false})

       alert("Password and Confirm Password must be same");
     }
          
  }
  



    render() {
       
      const { errors } = this.state;
      
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
                  {errors.email && <span className="text-danger">{errors.email}</span>}

                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" 
                    name="password" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  
                  placeholder="Password" />
                  {errors.email && <span className="text-danger">{errors.password}</span>}

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
                   <Button variant="primary" type="submit" disabled={this.state.isLogin}>
                     {this.state.isLoading && <div className="spinner-border" role="status"></div>}
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