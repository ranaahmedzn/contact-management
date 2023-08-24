import React from 'react';
import {Link} from 'react-router-dom';
import crossImg from '../../../assets/cross.png'

const Contact = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                <Link to="/contact/create-contact">
                    <button className='bg-blue-100 py-3 px-8 text-xl font-semibold border border-cyan-500 rounded-lg'>Create Contact</button>
                </Link>
            </div>

            <div className='my-20 w-1/2 mx-auto py-10 bg-blue-100 px-8 text-xl font-semibold border border-cyan-500 rounded-lg flex gap-8 items-center'>
                <img width="80" src={crossImg} alt="" />
                <p>No Contact Found! <br /> Please add contact from the Create Contact Button</p>
            </div>
        </div>
    );
};

export default Contact;