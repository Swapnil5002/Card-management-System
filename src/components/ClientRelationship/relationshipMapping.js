import React from 'react';
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import './clientRelationShip.scss'

function ClientRelationshipMapping() {
    return (
        <div className='top_div'>
        <Form style={{paddingTop: '7px'}}>
          <Row>
            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select a Client</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Select a Client</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Card Hash</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your first Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select a Relationship</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Relationship...</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group> 

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Status</Form.Label>
             <Dropdown>
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
            </Col>

            <Col>
              <Form.Group controlId="formGroupEmail">
               <Form.Label>Customer Hash</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter your first Name" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button type="submit" size="xs" style={{margin: '0 auto', width: '31%', padding: '10px 0'}}>Submit</Button>
          </Row>
          </Form>
        </div>
        );
}

export default ClientRelationshipMapping;
