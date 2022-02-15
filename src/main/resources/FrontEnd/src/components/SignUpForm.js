import React,{useState} from "react";
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

const SignUpForm = ({Login, error}) =>{
    const[details,setDetails] = useState({userName:"" , password:""});

    const handleSubmit = event => {
                event.preventDefault();
                event.stopPropagation();
            Login(details)

    };
    
    const style ={
        backgroundColor: "#02020233"
    }
    const Style ={
        backgroundColor: "#282e39b3",
        fontSize:"17px",
    }

    return(
        <Container>
        <Row>

          <Col></Col>
            <Col md={6} className="rounded">
            <Form noValidate  onSubmit={handleSubmit} className="p-4 my-5 text-light rounded" style={style}> 
            <h1 className="my-3">Login</h1>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="d-block" htmlFor="user-name">User Name</Form.Label>
                <Form.Label >{error.errorUserName}</Form.Label>
                <Form.Control
                  autoFocus
                  required
                  type="text"
                  placeholder="user name" 
                  name="userName"
                  id="userName"
                  onChange={e => setDetails({...details,userName:e.target.value})}
                  value={details.userName}
                />
              </Form.Group>
            </Row>
  

            <Row className="mb-3">
            <Form.Group roup as={Col} >
              <Form.Label className="d-block">password</Form.Label>
              <Form.Label >{error.errorPassword}</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="password"
                name="password"
                id="password"
                onChange={e => setDetails({...details,password:e.target.value})}
                value={details.password}
                
              />
            </Form.Group>
          </Row>

          
          <Row><Col><Button type="submit" style={Style} >Sign Up</Button></Col></Row>
           
        

          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>
    );
}

export default SignUpForm;

