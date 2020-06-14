import React, { useState } from 'react';
import {Form, Button, Col, Row } from 'react-bootstrap';
import './login.scss'
import ModalBox from '../../common/ModalBox/modal'
import backgroundImage from '../../assets/DigitalCurrency.svg'
import bankX from '../../assets/bankxLogo.png'
import neoKredLogo from '../../assets/neokredLogo.png'

function Login() {
    const [isLoginClicked, setisLoginClicked] = useState(false)

    const handleLoginClick = (event) => {
        setisLoginClicked(!isLoginClicked)
    }

    const onModalClose = (value) => {
        setisLoginClicked(value);
    }

    return (
        <>
            <Row>
                <Col lg='5' style={{backgroundColor: 'white', height: '100vh'}}>
                <div className='login' style={{backgroundColor: 'white', paddingTop: '80px', paddingRight: '80px', paddingLeft: '80px'}}>
                    <img src={bankX} alt=''/>
                    <div style={{marginTop: '10px'}}>
                        <label style={{fontSize: '20px', fontWeight: '500'}}>powered by</label>
                        <img src={neoKredLogo} alt='' style={{width: '30%', paddingLeft: '10px'}}/>
                    </div>
                    <div className='login-form'>
                        <h1>Log In</h1>

                        <Form style={{paddingTop: '15px'}}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="you@example.com" style={{border: '1px solid #2dd771'}}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your Password" style={{border: '1px solid #2dd771'}}/>
                            </Form.Group>
                        </Form>
                    </div>
                    <Row>
                        <div className='check'>
                        <div className='checkbox'>
                            <input type="checkbox" id="checkbox" name="checkbox" value="login"/>
                            <label for="checkbox">Remember Me!</label>
                        </div>
                            <a href=''>Forgot Password?</a>
                        </div>
                    </Row>
                    <Button onClick={handleLoginClick} type="submit" style={{backgroundColor: '#2dd771', border: '1px solid #2dd771', width: '100%'}} size="lg">Log In</Button>
                </div>

                </Col>
                <Col>
                    <img src={backgroundImage} alt='' className='login-image'/>
                </Col>
            </Row>
            {isLoginClicked && <ModalBox showModal={isLoginClicked} handleLoginClick={handleLoginClick} onClose={onModalClose}/>}
            </>
        );
}

export default Login;
