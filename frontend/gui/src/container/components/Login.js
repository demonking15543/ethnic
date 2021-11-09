import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLoggedIn, setLogInError } from '../redux/actions/UserActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import api from '../api/loacalConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CSRFToken from './CSRFToken';

const Login = ({ setisLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const history = useHistory()

    const dispatch = useDispatch()


    const FetchToken = async (data) =>{
        const response = await api.post("accounts/token/", data)
        return response;
        
        


    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
    
        FetchToken(data)
        .then(res => {
            dispatch(setLoggedIn(res.data));
            history.push('/');

            // window.location.href ="/"


            
        })
        .catch((err) => {
            dispatch(setLogInError(err.response.data))
            setErrors(err.response.data)
            
        })  
        
  
    };
    return (
        <Row>
            <Col className="offset-md-4" sm={12} md={4} >
                <Card className="my-4">
                    <Card.Header className="text-center">Sign In</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <CSRFToken />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required />
                            </Form.Group>
                            {errors && <span className="text-danger">{errors.detail}</span>}

                            <div className="text-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </div>
                            
                        </Form>

                    </Card.Body>
                </Card>

            </Col>
           


        </Row>


    );



}


export default Login;