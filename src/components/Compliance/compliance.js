import React from 'react';
import './compliance.scss'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';

function Compliance() {
    return (
        <div className='top_div'>
        <Form style={{paddingTop: '7px'}}>
          <Row>
            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Client</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Client</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>First Name</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Nationality</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Nationality</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>First Name</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Logo</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Select Logo</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Last Name</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Country Code</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Company Name</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Select Company Name</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Email Address</Form.Label>
               <Form.Control size='lg' type="email" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Mobile Number</Form.Label>
               <Form.Control size='lg' type="number" placeholder="Enter your last Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>
          </Row>
          </Form>
        </div>
        );
}

export default Compliance;
