import axios from 'axios';
import React ,{useState} from 'react';
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

function Message() {

    const [data, setData] = useState({content:""});

    const style ={
        backgroundColor: "#02020233"
      }
      const Style ={
        backgroundColor: "#282e39b3",
        fontSize:"17px",
        
    }

   
    const handleSubmit = event => {
      event.preventDefault();
      axios.post('http://localhost:8080/send',data.content,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .then(res => {
      console.log(res)
  })
      .catch(err => {
        
          console.log(err)
      })
};
    return (
        <div>
              

  
    <Container>
        <Row>
          <Col></Col>
            <Col md={6} className="rounded">
            <Form noValidate  onSubmit={handleSubmit} className="p-4 my-5 text-light rounded" style={style}> 
            {/* <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Address"
                  id="emailAddress"
                  name="emailAddress"
                  onChange={e => setData({...data,emailAddress:e.target.value})}
                  value={data.emailAddress}
                />
              </Form.Group>
            </Row> */}
  
          <Row className="mb-3">
            <Form.Group as={Col} >
                <Form.Label>Content</Form.Label>
                  <textarea
                    className="form-control" 
                    rows="4"
                    placeholder="Content"
                    id="content"
                    name="content"
                    onChange={e => setData({...data,content:e.target.value})}
                    value={data.content}
                  />
              </Form.Group>
          </Row>

          {/* <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Date</Form.Label>
                <Form.Control  
                    required 
                    type="date" 
                    placeholder="Date"
                    id="date"
                    name="date"
                    onChange={e => setData({...data,date:e.target.value})}
                    
                    value={data.date}
                  />
                </Form.Group>
          </Row> */}
          <Container fluid>
          <Row>
          
        <Col></Col>
            <Col><Button type="submit"  style={Style} >Send</Button></Col>   
          <Col ></Col>
        </Row>
  </Container> 
          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>

  </div>
        
        
      );
    
      
    
}

export default Message;
