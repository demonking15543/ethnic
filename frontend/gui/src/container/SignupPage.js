import React, { Component } from 'react'
import  Container from 'react-bootstrap/Container';

import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import SignupForm from './components/SignupForm';
class SignupPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4} className="offset-md-4">
                        <SignupForm />
                    </Col>
    
                </Row>
            </Container>
        )
    }
}


export default SignupPage;