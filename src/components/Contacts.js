import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Contact from './Contact';
import { selectAllContact, clearAllContact, deleteSelectedContact } from '../action/contactAction'

const Contacts = () => {

  const dispatch = useDispatch()
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(state => state.contact.contacts)
  const selectedContacts = useSelector(state => state.contact.selectedContacts)
  console.log(contacts)

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)))
    } else {
      dispatch(clearAllContact())
    }
  }, [selectAll])
  return (
    <div>
      {
        selectedContacts.length > 0 ? (
          <button
            className="btn btn-danger mb-3 mt-3"
            onClick={() => dispatch(deleteSelectedContact())}
          >
            delete all
          </button>
        ) : null
      }
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)} />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                />
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} selectAll={selectAll} />
            ))
          }

        </tbody>

      </table>
    </div>
  );
}

export default Contacts;
