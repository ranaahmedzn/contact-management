import React from 'react';
import { Link } from 'react-router-dom';
import crossImg from '../../../assets/cross.png'
import { useAppSelector } from '../../../redux/hooks';
import ContactCard from '../../../components/ContactCard';

const Contact = () => {
    const { contacts } = useAppSelector(state => state.contact)

    console.log(contacts)

    return (
        <div className='my-5 max-w-5xl px-4 md:px-0 mx-auto'>
            <div className='text-center'>
                <Link to="/contact/create-contact">
                    <button className='bg-blue-100 py-3 px-8 text-xl font-semibold border border-cyan-500 rounded-lg'>Create Contact</button>
                </Link>
            </div>

            <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {contacts?.map(contact => <ContactCard key={contact?.id} contact={contact} />)}
            </div>

            {contacts.length < 1 && <div className='my-20 w-1/2 mx-auto py-10 bg-blue-100 px-8 text-xl font-semibold border border-cyan-500 rounded-lg flex gap-8 items-center'>
                <img width="80" src={crossImg} alt="" />
                <p>No Contact Found! <br /> Please add contact from the Create Contact Button</p>
            </div>}
        </div>
    );
};

export default Contact;