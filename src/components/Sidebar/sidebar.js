import React, { useState } from 'react'
import {Col, Accordion, Card} from 'react-bootstrap'
import './sidebar.scss'
import neoKredLogo from '../../assets/neokredLogo.png'
import bulkRegistration from '../../assets/bulkregistration.svg'
import clientPrefund from '../../assets/clientPrefund.svg'
import reports from '../../assets/reports.svg'
import card from '../../assets/card.svg'
import customer from '../../assets/customer.svg'
import clientRelationship from '../../assets/clientRelationship.svg'
import client from '../../assets/client.svg'
import adminservice from '../../assets/adminservice.svg'
import compliance from '../../assets/compliance.svg'
import rightarrow from '../../assets/next.svg'
import { BrowserRouter as Router, Link } from "react-router-dom"


function Headers() {
    const [toogleSidebar, setToogleSidebar] = useState(false)

    const handleHamClick = ()=> {
      setToogleSidebar(true)
    }
    
    return (    
        <div className={toogleSidebar ? 'hide_sideBar' : 'sidebar'}>
            <Col style={{backgroundColor: '#f5f5f5'}}>
                <img src={neoKredLogo} alt='logo' className={toogleSidebar ? 'hideImage' : 'image'}/>
                <img src='' alt='asasdad' onClick={handleHamClick} className={toogleSidebar ? 'hideImageHam' : 'image'}/>
            </Col>
            <Col className='one card-header'>
            <Accordion defaultActiveKey="0" className={toogleSidebar ? 'hidedd' : 'dd'}>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className='acdd'>
                        <img src={client} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client</label>
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='body'>
                            <Link to='/client/addclient'><p className='p'>Add Client</p></Link>
                            <Link to='/client/clientlist'><p className='p'>Client List</p></Link>
                            <Link to='/client/addpocket'><p className='p'>Add Pocket</p></Link>
                            <Link to='/client/pocketlist'><p className='p'>Pocket List</p></Link>
                            <Link to='/client/programlist'><p className='p'>Program List</p></Link>
                        </Card.Body>
                      
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className='acdd'>
                        <img src={clientRelationship} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client Relationship</label>      
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/clientrelation/add'><p className='p'>Add Client Relationship</p></Link>
                        <Link to='/clientrelation/relationshipmapping'><p>Client Relationship Mapping</p></Link>
                        <Link to='/clientrelation/relationshiplist'><p className='p'>Client Relationship List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className='acdd'>
                        <img src={customer} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Customer</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/customer/addCustomer'><p className='p'>Add Coustomer</p></Link>
                        <Link to='/customer/customerList'><p className='p'>Customer List</p></Link>
                        <Link to='/customer/kycReports'><p className='p'>KYC Reports</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Link to='/compliance'>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className='acdd'>
                        <img src={compliance} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Compliance</label>                    
                    </Accordion.Toggle>
                    {/* <Accordion.Collapse eventKey="3" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse> */}
                </Card>
                </Link>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className='acdd'>
                        <img src={card} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Cards</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/client/addclient'><p className='p'>Card List</p></Link>
                        <Link to='/client/addclient'><p className='p'>Assign Physical Cards</p></Link>
                        <Link to='/client/addclient'><p className='p'>Bulk Card Issuance</p></Link>
                        <Link to='/client/addclient'><p className='p'>Bulk Card Issuance Indent</p></Link>
                        <Link to='/client/addclient'><p className='p'>Bulk Card Issuance List</p></Link>
                        <Link to='/client/addclient'><p className='p'>Bulk Card Issuance Response</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="5" className='acdd'>
                        <img src={reports} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Reports</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/client/addclient'><p className='p'>SettleMent Reports</p></Link>
                        <Link to='/client/addclient'><p className='p'>Transaction Reports</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="6" className='acdd'>
                        <img src={clientPrefund} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client Prefund</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/client/addclient'><p className='p'>Client Prefund Approval</p></Link>
                        <Link to='/client/addclient'><p className='p'>Wallet Fund Request</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="7" className='acdd'>
                        <img src={adminservice} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Admin Services</label>
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                    <Link to='/client/addclient'><p className='p'>Add Role</p></Link>
                    <Link to='/client/addclient'><p className='p'>User List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8" className='acdd'>
                        <img src={bulkRegistration} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Bulk Registration</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                    <Link to='/client/addclient'><p className='p'>Bulk Customer Registraion</p></Link>
                    <Link to='/client/addclient'><p className='p'>Bulk Customer List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
        </div>
        );
}

export default Headers;
