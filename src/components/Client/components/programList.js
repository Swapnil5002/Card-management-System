import React from 'react';
import './client.scss'
import { Form, Row, Col, Button, Dropdown, Table, Pagination } from 'react-bootstrap';
import PaginationCommon from '../../../common/Pagination/pagination'
import TableCommonComponent from '../../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Logo',
    'Program Code',
    'Description',
    'Status',
    'Action'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762'},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562'},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762'},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562'},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562'},
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$752', updateFees: '$52'},
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562'},
    {no:8., clientName: 'Divya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$52'}
]


const ViewListButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>View MCC List</Button>
    )
}

function ProgramList() {
    return (
        <div className='table_div'>
                <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>    
                <PaginationCommon/>
        </div>
        );
}

export default ProgramList;
