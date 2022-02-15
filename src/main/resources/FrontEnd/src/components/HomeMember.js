import React from 'react';
import {Button} from 'react-bootstrap';

const  HomeMember = (props) =>  {
    const Style = {
        color : {
            color :"#b08fff"
        }

    } 
        return(
            <div className='col-md-3 col-sm-6 mb-3 '>
                <div  className="card h-100 bg-dark bg-opacity-75 text-white">
                    <div className="card-header" >
                        <img  className="rounded-3"style={{maxWidth:"100%"}} src={props.img} alt="Non"/>
                    </div>
                    <div className="card-body">
                        <div><span style={Style.color}>id : </span> {props.id}</div>
                        <div><span style={Style.color}>position : </span>{props.position}</div>
                        <div><span style={Style.color}>Price : </span>{props.realPrice}</div>
                        <div><span style={Style.color}> Number The Shares : </span>{props.numbrofstock}</div>
                        <Button onClick = {props.onclick}>{props.text}</Button>
                    </div>
                </div>
            </div>
        )
}
export default HomeMember;