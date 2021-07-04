import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addContact, getContact, updateContact } from '../action/contactAction';
import  shortid from 'shortid'
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';

const EditContact = () => {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state)=> state.contact.contact)
    const [name, setName] = useState();
    const [phone , setPhone] = useState();
    const [email, setEmail] = useState();
    const [website, setWebsite] = useState();

 

    useEffect(()=>{
        if(contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
            setWebsite(contact.website)
        }
        dispatch(getContact(id))
    }, [contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email,
            website: website
        });
        dispatch(updateContact(update_contact));
        history.push('/')
    };

    return (
       <div className="card border-0 shadow">
           <div className="card-header">Add a Contact</div>
           <div className="card-body">
               <form onSubmit={(e) =>onUpdateContact(e)}>
                   <div className="form-group">
                       <input type="text"
                       className="form-control"
                       placeholder="Enter your Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       />
                   </div>

                   <div className="form-group">
                       <input type="text"
                       className="form-control"
                       placeholder="Enter your Phone Number"
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       />
                   </div>

                   <div className="form-group">
                       <input type="text"
                       className="form-control"
                       placeholder="Enter your Email Address"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       />
                   </div>

                   <div className="form-group">
                       <input type="text"
                       className="form-control"
                       placeholder="Enter your Website Name"
                       value={website}
                       onChange={(e) => setWebsite(e.target.value)}
                       />
                   </div>
                   <button className="btn btn-warning" type="submit">Update Contact</button>
               </form>
           </div>
       </div>
    );
}

export default EditContact;
