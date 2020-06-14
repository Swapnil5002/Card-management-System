import React from 'react';
import './client.scss'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';

function AddPocket() {
    return (
        <div className='top_div'>
        <Form style={{paddingTop: '7px'}}>
          <Row>
            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Company Name</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Company Name</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something e*/lse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>
            </Col>

            <Col>
                <Form.Group controlId="formGroupEmail">
                 <Form.Label>Pocket Name</Form.Label>
                 <Form.Control size='lg' type="text" placeholder="Enter your pocket Name" style={{border: '1px solid #2dd771'}}/>
                </Form.Group>
            <Button type="submit" size="lg" style={{width: '100%'}}>Submit</Button>
            </Col>

            <Col>
                <Form.Group controlId="formGroupEmail">
                 <Form.Label>MCC Group</Form.Label>
                 <Form.Control size='lg' type="text" placeholder="Enter your MCC Group" style={{border: '1px solid #2dd771'}}/>
                </Form.Group>
            </Col>
          </Row>
          </Form>
        </div>
        );
}

export default AddPocket;
