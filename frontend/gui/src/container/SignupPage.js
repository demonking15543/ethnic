import React, { Component } from 'react'
import  Container from 'react-bootstrap/Container';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import SignupForm from './components/SignupForm';
class SignupPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4} className="offset-md-4">
                        <h4>Signup Form</h4>
                        <SignupForm />
                    </Col>
    
                </Row>
            </Container>
        )
    }
}


export default SignupPage;