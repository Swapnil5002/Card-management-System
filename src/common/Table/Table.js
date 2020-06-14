import React from 'react'
import './Table.scss'
import { Table, Button } from 'react-bootstrap'


const ButtonComponent = ({btnName}) => {
    return (
        <>
            <Button type="submit" size="sm" style={{width: '100%'}} value={btnName}></Button>
        </>
    )
}


function TableCommonComponent({tableHeadArray, tableData }) {
    return (
            <Table striped bordered hover size="sm">
                <thead className='table_head'>
                    <tr>
                    {tableHeadArray.map((headName, index) =>
                    <th className='head_title' key={index}>{headName}</th>
                    )}
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {tableData.map((data, index) => 
                    <tr key={index}>
                        <td className='table_values'>{data.no}</td>
                        <td className='table_values'>{data.clientName}</td>
                        <td className='table_values'>{data.email}</td>
                        <td className='table_values'>{data.contact}</td>
                        <td className='table_values'>{data.program}</td>
                        <td className='table_values'>{data.viewBalance}</td>
                        <td className='table_values'>{data.viewBalance}</td>
                        <td><ButtonComponent btnName={'sdsdsd'}/></td>
                        <td><ButtonComponent btnName={'qwwqe'}/></td>
                    </tr>)}
                </tbody>
            </Table>
            )
        }

export default TableCommonComponent;