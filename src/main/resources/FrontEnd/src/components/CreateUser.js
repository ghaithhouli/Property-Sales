import axios from "axios";
import React,{useState} from "react";
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

const CreateUser = () =>{
    const[details,setDetails] = useState({email:"",username:"" , password:""});

    const handleSubmit = event => {
        event.preventDefault();
        console.log(details);
        axios.post('http://localhost:8080/api/auth/signup',details,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
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
            <h2 className="my-3">Create New User</h2>


            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="d-block" htmlFor="email">Email</Form.Label>

                <Form.Control
                  autoFocus
                  required
                  type="email"
                  placeholder="Email" 
                  name="email"
                  id="email"
                  onChange={e => setDetails({...details,email:e.target.value})}
                  value={details.email}
                />
              </Form.Group>
            </Row>
  


            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className="d-block" htmlFor="user-name">User Name</Form.Label>

                <Form.Control
                  autoFocus
                  required
                  type="text"
                  placeholder="user name" 
                  name="username"
                  id="username"
                  onChange={e => setDetails({...details,username:e.target.value})}
                  value={details.username}
                />
              </Form.Group>
            </Row>
  

            <Row className="mb-3">
            <Form.Group roup as={Col} >
              <Form.Label className="d-block">password</Form.Label>
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

          
          <Row><Col><Button type="submit" style={Style} >Create New User</Button></Col></Row>

           
        

          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>
    );
}

export default CreateUser;

