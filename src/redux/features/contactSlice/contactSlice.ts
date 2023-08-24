import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface Contact {
    id: number,
    firstName: string,
    lastName: string,
    status: string
}

interface ContactState {
    contacts: Contact[]
}

// Define the initial state using that type
const initialState: ContactState = {
    contacts: [],
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        createContact: (state, action: PayloadAction<{firstName: string, lastName: string, status: string}>) => {
           state.contacts.push({
            id: state.contacts.length + 1,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            status: action.payload.status
           })
        },
        editContact: (state, action: PayloadAction<{id: number, firstName: string, lastName: string, status: string}>) => {
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload.id)
            
           state.contacts = [...updatedContacts , {
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            status: action.payload.status
           }]
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload)
            state.contacts = updatedContacts;
        },
    },
})

export const {createContact, editContact, deleteContact} = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: RootState) => state.contact.contacts;

export default contactSlice.reducer;