import axios from 'axios';
import React, { useState } from 'react';
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

const SaleForm = (props) => {

      const [validated, setValidated] = useState(false);
      // const [finalPrice, setfinalPrice] = useState(props.finalPrice);
      const [data,setData] = useState({realPrice:0,numbrofstock:0,nameofcustomer:""})
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hh");
        console.log(data);
       
        props.data.realPrice = data.realPrice;
        props.data.numbrofstock= data.numbrofstock;
        props.data.nameofcustomer = data.nameofcustomer;



        axios.post(`http://localhost:8080/property/sell/${props.data.id}`, props.data,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(res => {
          axios.get('http://localhost:8080/property/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }).then(response =>{
            props.setAllData(response.data)
            
        })
        console.log(res)
    })
        .catch(err => {
          
            console.log(err)
        })

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);

      };
    
  const style ={
    backgroundColor: "#02020233"
  }
  const Style ={
    backgroundColor: "#282e39b3",
    fontSize:"17px",
    
  }

  // const onChangehandler = (event) => {
  //   console.log(event.target.value);
  //   setfinalPrice(event.target.value);
  // }
      return (
    <Container>
        <Row>

          <Col></Col>
            <Col md={6} className="rounded">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4 my-2 text-light rounded w-75" style={style}>
            <div>
            <h2>{props.data.id}</h2>
            {/* <img className="d-block my-3 rounded mw-100" src={props.img} alt="Non"/> */}

            </div>
    
                <Row className="mb-3 ">
                    <Form.Group as={Col}  controlId="ThePriceId">
                        <Form.Label>The Price</Form.Label>
                        <Form.Control
                            required 
                            type="number" 
                            placeholder="The Price Sale"
                            name="realPrice"
                            // value= {data.realPrice !== props.realPrice ? setData(props.realPrice) : data.realPrice}
                            value={data.realPrice}
                            onChange={e => setData({...data,realPrice:e.target.value})}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Numbr Of Stock</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Numbr Of Stock"
                            value={data.numbrofstock}
                            name="numbrofstock"
                            onChange={e => setData({...data,numbrofstock:e.target.value})}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}  >
                        <Form.Label>Name Bying</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name Bying"
                            value={data.nameofcustomer}
                            name="nameofcustomer"
                            onChange={e => setData({...data,nameofcustomer:e.target.value})}
                        />
                    </Form.Group>
                </Row>



          <Container fluid>
          <Row>
          
        <Col></Col>
            <Col><Button type="submit"  style={Style} >{props.text}</Button></Col>   
          <Col ></Col>
        </Row>
  </Container> 
          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>


        
        
      );
    
    

};

export default SaleForm;