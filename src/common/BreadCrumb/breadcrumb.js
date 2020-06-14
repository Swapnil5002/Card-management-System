import React, {useState} from 'react';
import {Breadcrumb} from 'react-bootstrap';
import './breadCrumb.scss'

function BreadCrumbs() {

  function func() {
      console.log(window.location.pathname())
  }

  return (
    <Breadcrumb>
        <Breadcrumb.Item href="#">Client</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumb_item' onClick={()=> this.func()}></Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
