import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "username": { username },
            "password": { password },
            "terms": { terms }

        };
        console.log(data)



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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    name="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
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