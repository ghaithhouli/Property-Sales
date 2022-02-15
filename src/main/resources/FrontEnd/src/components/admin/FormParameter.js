import React,{useState} from "react";
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

const FormParameter = (props) =>{
    const[details,setDetails] = useState({val:"",parameter:""});
    
    const handleSubmit = event => {
            event.preventDefault();
            details.id = props.id;
            props.fun(props.index,details)
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

      <Form noValidate onSubmit={handleSubmit} className="p-4 my-5 text-light rounded" style={style}> 
            <h4 className="my-3">ID Parameter : {props.id}</h4>
          
            <Row className="mb-3">
              <Form.Group as={Row} >

            <Col sm="5">
                <Form.Control
                column 
                sm={2}
                  autoFocus
                  required
                  className="d-inline"
                  type="text"
                  placeholder="Parameter" 
                  name="parameter"
                  id="Parameter"
                  onChange={e => setDetails({...details,parameter:e.target.value})}
                  value={details.parameter}
                />
            </Col>
            <Col sm="5">
                <Form.Control
                required
                type="number"
                placeholder="value"
                name="value"
                id="value"
                onChange={e => setDetails({...details,value:e.target.value})}
                value={details.value}
              />
            </Col>
            <Col sm="2"><Button type="submit" style={Style} >Apply</Button></Col>
            </Form.Group> 
          </Row>
      </Form>
  </Row>
  </Container>
    );
}

export default FormParameter;

