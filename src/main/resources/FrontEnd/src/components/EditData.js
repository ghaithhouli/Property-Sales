import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Container} from 'react-bootstrap';
import Home  from './Home';
import Search from "./Search";

const EditData = () => {
    const [data,setData] = useState([]);
    // const URL = 'http://localhost:3000/data.json';

    useEffect(() => {
        axios.get('http://localhost:8080/property/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }).then(response =>{
            setData(response.data)
            
        })
    },[])


    return (
        <Container>
            <Search/> 
            <Home text="Edit" filter={data} setFilter={setData}/>
        </Container>
    );

};
export default EditData;