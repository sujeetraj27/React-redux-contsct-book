import React from 'react';
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {deleteContact} from '../action/contactAction'


const Contact = ({ contact, selectAll }) => {

    const dispatch = useDispatch()
    const { name, phone, email, website, id } = contact;
    return (
        <tr>
            <td scope="row">
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox"
                        className="custom-control-input" />
                    <label className="custom-control-label" />
                </div>
            </td>
            <td><Avatar className="mr-3" name={name} size="30" round={true} /> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{website}</td>
            <td className="action">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-4">edit</span>
                </Link>
                
                    <span className="material-icons text-danger " onClick={() => dispatch(deleteContact(id))}>delete</span>
                
         </td>
        </tr>
    );
}

export default Contact;
