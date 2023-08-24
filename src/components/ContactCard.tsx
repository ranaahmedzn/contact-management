import React from 'react';

interface Contact{
    id: number;
    firstName: string;
    lastName: string;
    status: string;
};

interface ContactCardProps {
    contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({contact}) => {

    return (
        <div className="flex flex-col rounded-xl bg-white bg-clip-border border border-gray-200 border-opacity-90 text-gray-700 shadow-md">
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Name: {contact.firstName} {contact.lastName}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Status: {contact.status}
                </p>
            </div>
            <div className="p-6 pt-0 flex justify-between">
                <button
                    className="select-none rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-center align-middle font-sans text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Edit Contact
                </button>
                <button
                    className="select-none rounded-lg bg-gradient-to-r from-rose-400 to-rose-500 py-2 px-4 text-center align-middle font-sans text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;