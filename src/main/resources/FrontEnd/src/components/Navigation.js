
import React from "react";
import {Nav,Container,Navbar,Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Navigation  = (props) => {

    return(
          <Navbar collapseOnSelect expand="lg"   variant="dark" className="zindex-dropdown shadow  mb-5 bg-opacity-25 bg-dark" >
            <Container>
            <Navbar.Brand  as={NavLink} to="/" id="SSFRE">SSFRE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  as={NavLink} to="/EntryData">Entry Data</Nav.Link>
                <Nav.Link  as={NavLink} to="/DeleteData">Delete Data</Nav.Link>
                <Nav.Link  as={NavLink} to="/EditData">Edit Data </Nav.Link>
                <Nav.Link  as={NavLink} to="/Sale">Sale</Nav.Link>
                {/* Admin */}
                {(props.isAdmin) ? <Nav.Link  as={NavLink} to="/CreateUser">Create New User</Nav.Link> : null}
                {(props.isAdmin) ? <Nav.Link  as={NavLink} to="/TableAdditions">Table Additions</Nav.Link> : null}
                {(props.isAdmin) ? <Nav.Link  as={NavLink} to="/TableModifications">Table Modifications</Nav.Link> : null}
                {(props.isAdmin) ? <Nav.Link  as={NavLink} to="/parameters">parameters</Nav.Link> : null}
                {/* User */}
                {(!props.isAdmin) ? <Nav.Link  as={NavLink} to="/Message">Message</Nav.Link> : null}
                <div className="position-absolute mx-3 end-0 text-light ">
                <span className="mx-3 h5">{props.userName}</span>
                  <Button onClick={props.Logout}>Logout</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
    );
}
export default Navigation;