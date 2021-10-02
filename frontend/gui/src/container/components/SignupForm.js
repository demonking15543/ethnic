import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignupForm = () =>{
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(initialState)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)


 


  return (
    <Form onSubmit={this.handleSubmit}>
      <div className="p-1">
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Enter First Name" />          
        </Form.Group>        
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" 
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          
          placeholder="Enter Last Name" />          
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}          
           placeholder="Enter email" />
          {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}

        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
            name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          placeholder="Password" />
          {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}

        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password"
          name="confirmPassword" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          
          placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"
                name="terms"
                checked={terms}
                onChange={(e) => setTerms(e.target.value)}
                label="T&C" />
        </Form.Group>


        <div className="text-center">
           <Button variant="primary" type="submit" disabled={this.state.isLogin}>
             {/* {this.state.isLoading && <div className="spinner-border" role="status"></div>} */}
             Submit
           </Button>
        </div>
      </div>

</Form>
)


}       
      
            



export default SignupForm;