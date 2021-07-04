//action
import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELET_SELCTED_CONTACT
} from '../constant/type'

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}


//get a contact

export const getContact = (id) => {
    return {
        type: GET_CONTACT,
        payload: id,
    }
}

// update a contact

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

//delete contact

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})

//select contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
})

// clrat All contact

export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})

//delete selected contact

export const deleteSelectedContact = () => ({
    type: DELET_SELCTED_CONTACT,
})
