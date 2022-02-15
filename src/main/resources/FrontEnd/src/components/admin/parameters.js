import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RowParameter from './RowParameter';
import Table from 'react-bootstrap/Table'
import FormParameter from './FormParameter';
import { Button } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
function Parameters() {

    const [parameters,setParameters] = useState([]);







    const [form,setForm] = useState();
    useEffect(() =>{
        axios.get('http://localhost:8080/parameters/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
                setParameters(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
            })
        
    },[])

    const handlerDelete = (id) =>{
        axios.post(`http://localhost:8080/parameters/delete/${id}`,"",{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
            axios.get('http://localhost:8080/parameters/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
                .then(res => {
                setParameters(res.data)
                console.log(res)
            }).catch(err => {
                console.log(err)
                })


        })
            .catch(err => {
              
                console.log(err)
            })
      
    }

    const Edit = (id,t) => {
        axios.post(`http://localhost:8080/parameters/update/${id}`, t,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(res => {

            axios.get('http://localhost:8080/parameters/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
            setParameters(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
            })

        console.log(res)
    })
        .catch(err => {
          
            console.log(err)
        })


    } 

    const handlerEdit = (index) =>{
        setForm(<FormParameter memberInfo1={parameters[index]} index= {index} id={parameters[index].id}  fun={Edit}/>);
    }

    const Add = (index,t) => {
        // setParameters(parameters => [...parameters,{...t}])
        axios.post('http://localhost:8080/parameters/Add', t,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(res => {

            axios.get('http://localhost:8080/parameters/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
            setParameters(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
            })

        console.log(res)
    })
        .catch(err => {
          
            console.log(err)
        })


        // console.log(parameters);
    } 
    
    const handlerAdd = () =>{
       
        setForm(<FormParameter index = {parameters.length} id={(parameters.length !==0 )?parameters[parameters.length-1].id+1: 1} fun={Add}/>);
    }





    const rowTable = (x) =>{
        const Rows = x.map((row,index) => <RowParameter
            key={index}
            id={row.id}
            Parameter={row.parameter}
            value={row.value}
            delete={() => handlerDelete(row.id)}
            Edit={() => handlerEdit(index)}
        />)
        return Rows;
    }


    return (
        <div>
        {form !== null ? form : null}
            <Table striped bordered hover size="sm" className="container bg-opacity-75 bg-light rounded">
            <thead>
            <tr>
                <th><Button onClick={handlerAdd} className='bg-gradient my-1 w-100'><IoIosAddCircle/></Button></th>
                <th>Parameter</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {rowTable(parameters)}
            </tbody>
        </Table>
        </div>
    )
}

export default Parameters
