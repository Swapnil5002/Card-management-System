import React, { useState } from 'react'
import {Form, Image, Row, Navbar, Nav, FormControl, Card } from 'react-bootstrap'
import userImage from '../../assets/user.svg'
import './header.scss'

const AddPocket = ()=> {

    return (
        <Navbar expand='md' fixed="top">
           <Form inline>
                <FormControl type="text" placeholder="Search..." className="mr-xs-2" />
            </Form>
                <div className='image_detail' >
                    <Image src={userImage} roundedCircle style={{width: '5%', marginRight: '5px'}}/>
                    <Card.Text style={{fontWeight: '600'}}>Welcome, Tarun</Card.Text>
                </div>
        </Navbar>
        )
}

export default AddPocket
