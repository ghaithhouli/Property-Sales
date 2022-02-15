import React,{useState} from "react";
import {Col,Row,Form,Button, Container} from 'react-bootstrap';
import axios from "axios";
const LoginForm = ({ Login,error}) =>{
    const[details,setDetails] = useState({username:"" , password:""});

    const handleSubmit = event => {
      axios.post ('http://localhost:8080/api/auth/signin', details)
      .then(res=>{
        localStorage.setItem('token',res.data.accessToken)
        localStorage.setItem('role',res.data.roles)
        console.log(res)
        Login(details)
        
      })
      .catch(err=>{
        console.log(err)
      })
            event.preventDefault();
            event.stopPropagation();
         

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
            <Form noValidate onSubmit={handleSubmit} className="p-4 my-5 text-light rounded" style={style}> 
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
                  name="username"
                  id="userName"
                  onChange={e => setDetails({...details,username:e.target.value})}
                  value={details.username}
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

          
          <Row><Col><Button type="submit" style={Style} >Login</Button></Col></Row>
           
        

          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>
    );
}

export default LoginForm;

