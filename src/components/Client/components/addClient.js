import React from 'react';
import './client.scss'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';

function AddClient() {
    return (
        <div className='top_div'>
        <Row>
          <Col>
            <Form style={{paddingTop: '15px'}}>
              <Form.Group controlId="formGroupEmail">
               <Form.Label>First Name</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your first Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control size='lg' type="number" placeholder="Enter mobile no." style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
             <Form.Group controlId="formGroupPassword">
             <Form.Label>Company Name</Form.Label>
             <Dropdown className='dropdown'>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Company Name</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
               <Form.Label>Company ID</Form.Label>
               <Form.Control size='lg' type="email" placeholder="Enter your company ID" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
             </Form>
          </Col>

          <Col>
          <Form style={{paddingTop: '15px'}}>
              <Form.Group controlId="formGroupEmail">
               <Form.Label>Last Name</Form.Label>
               <Form.Control size='lg' type="email" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control size='lg' type="email" placeholder="Enter your email ID" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
             <Form.Label>Company ID</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label  style={{width:'96%'}}>Company ID</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">YES Bank</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">ICICI Bank</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>
             </Form>
          </Col>
        </Row>
        <Row>
          <Button type="submit" size="xs">Submit</Button>
        </Row>
        </div>
        );
}

export default AddClient;
