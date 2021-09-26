import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import api from '../api/loacalConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CSRFToken from './CSRFToken';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);




    const FetchToken = async (data) =>{
        const response = await api.post("token/", data).catch((err) => {
            console.log("Error", err.response)
        });



    }
    const Hello = async () => {
        const response = await api.get("accounts/hello/").catch((err) => {
            console.log("Error", err.response.data)
        });
        console.log(response.data);
 

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            terms: terms

        };
        FetchToken(data);
        Hello();
        
        





    };

    return (
        <Row>
            <Col sm={12} md={4}>
            </Col>
            <Col sm={12} md={4}>
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox"
                                    name="terms"
                                    checked={terms}
                                    onChange={e => setTerms(e.target.checked)}
                                    label="T&C" />
                            </Form.Group>
                            <div className="text-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </div>
                            
                        </Form>

                    </Card.Body>
                </Card>

            </Col>
            <Col sm={12} md={4}>
            </Col>



        </Row>


    );



}


export default Login;