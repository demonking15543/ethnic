import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from '../api/loacalConfig';
import { useDispatch } from 'react-redux';
import { setNewUser, setUserError } from '../redux/actions/UserActions';
import { useHistory } from 'react-router-dom'
const SignupForm = () =>{
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();
  const history = useHistory()





  function handleSubmit(e){
    const data = {
      firstname,
      lastname,
      email,
      password,
      terms
    }

    e.preventDefault();
    if (password === confirmPassword){
        api
           .post('accounts/signup/', data)
           .then(response=>{
            dispatch(setNewUser(response.status));
            history.push('/login');


           })
           .catch(err =>{
                dispatch(setUserError(err.response.data))
                setErrors(err.response.data)

              })
         


    }
    else{
       setErrors({confirmPassword:"Password and confirm password must be same"})
    }
    
  }

 

  return (
    <Form onSubmit={handleSubmit} className="mt-2">
      <div className="px-4 mb-4" style={{border:"1px solid #ccc"}}>
      <h4 className="">Signup Form</h4>

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
          {errors.email && <span className="text-danger">{errors.email}</span>}

        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
            name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          placeholder="Password" />
          {errors.password && <span className="text-danger">{errors.password}</span>}

        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password"
          name="confirmPassword" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          
          placeholder="Confirm Password" />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"
                name="terms"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                label="T&C" />
        </Form.Group>


        <div className="text-center mb-2">
           <Button variant="outline-success" type="submit">
             Submit
           </Button>
        </div>
      </div>

</Form>
)


}       
      
            



export default SignupForm;