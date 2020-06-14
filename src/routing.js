import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import AddClient from './components/Client/components/addClient'
import Login from './components/Login/login'
import AddPocket from './components/Client/components/addPocket'
import ClientList from './components/Client/components/clientList'
import PocketList from './components/Client/components/pocketList'
import ProgramList from './components/Client/components/programList'
import AddClientRelationship from './components/ClientRelationship/addClient'
import ClientRelationshipMapping from './components/ClientRelationship/relationshipMapping'
import RelationshipList from './components/ClientRelationship/relationshipList'
import CustomerList from './components/Customer/customerList'
import KycReports from './components/Customer/kycReports'
import AddCustomer from './components/Customer/addCustomer'
import Compliance from './components/Compliance/compliance'

const routes = [
  {
    path: "/",
    main: () => <Login/>
  },
  {
    path: "/login",
    main: () => <Login/>
  },
  {
    path: "/client/addclient",
    main: () => <AddClient/>
  },
  {
    path: "/client",
    main: () => <AddClient/>
  },
  {
    path: "/client/addpocket",
    main: () => <AddPocket/>
  },
  {
    path: "/client/clientlist",
    main: () => <ClientList/> 
  },
  {
    path: "/client/pocketlist",
    main: () => <PocketList/>
  },
  {
    path: "/client/programlist",
    main: () => <ProgramList/>
  },
  {
    path: "/clientrelation/add",
    main: () => <AddClientRelationship/>
  },
  {
    path: "/clientrelation/relationshipmapping",
    main: () => <ClientRelationshipMapping/>
  },
  {
    path: "/clientrelation/relationshiplist",
    main: () => <RelationshipList/>
  },
  {
    path: "/customer/addCustomer",
    main: () => <AddCustomer/>
  },
  {
    path: "/customer/customerList",
    main: () => <CustomerList/>
  },
  {
    path: "/customer/kycReports",
    main: () => <KycReports/>
  },
  {
    path: "/compliance",
    main: () => <Compliance/>
  }
];


function Routing() {

  return (
      <Switch>
      {routes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          exact
          children={route.main}
      />)}
      </Switch> 
  );
}

export default Routing;
