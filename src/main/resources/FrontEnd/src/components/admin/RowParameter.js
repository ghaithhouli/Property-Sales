import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
function RowParameter(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.Parameter}</td>
            <td>{props.value}</td>
            <td>
                <Button onClick={props.delete} className='bg-danger bg-gradient my-1 mx-2 '><AiFillDelete/></Button>
                <Button onClick={props.Edit}className='bg-success bg-gradient my-1 '><FaEdit/></Button>
            </td>
        </tr>
    )
}

export default RowParameter
