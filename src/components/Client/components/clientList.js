import React from 'react';
import './client.scss'
import { Form, Row, Col, Button, Dropdown, Table, Pagination } from 'react-bootstrap';
import PaginationCommon from '../../../common/Pagination/pagination'
import TableCommonComponent from '../../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Client Name',
    'Email',
    'Contact Number',
    'Program',
    'View Balance',
    'Update Fees',
    'Set Limits',
    'Update Limits'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762'},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562'},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762'},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562'},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562'},
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$752', updateFees: '$52'},
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562'},
    {no:8., clientName: 'divya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$52'}
]

const SetLimitsButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>Set Limits</Button>
    )
}

const UpdateLimitsButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>Update Limits</Button>
    )
}

function ClientList() {
    return (
        <div className='table_div'>
           <TableCommonComponent tableData={tableData} tableHeadArray={tableHeadArray}/>
            <PaginationCommon/>
        </div>
        );
}

export default ClientList;
