import React from 'react';

const CreateContact = () => {
    return (
        <div className='w-full md:w-1/2 px-4 md:px-0 mx-auto'>
            <h3 className="text-3xl font-semibold text-center mt-3 mb-5">Create a New Contact</h3>

            <form className="w-full">
                <div className='p-8 bg-gray-200 rounded'>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block font-bold mb-1 md:mb-0 pr-4" htmlFor="firstName">
                                First Name:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-cyan-500" id="firstName" type="text" placeholder="Enter first name" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block font-bold mb-1 md:mb-0 pr-4" htmlFor="lastName">
                                Last Name:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-cyan-500" id="lastName" type="text" placeholder="Enter last name" />
                        </div>
                    </div>
                    <div className="flex  md:items-center">
                        <div className="md:w-1/3">
                            <label className="block  font-bold mb-1 md:mb-0 pr-4" htmlFor="lastName">
                                Status:
                            </label>
                        </div>
                        <div className="md:w-2/3 md:block flex gap-5 justify-between items-center">
                            <div className="flex items-center md:mb-4">
                                <input id="statusRadio-1" type="radio" value="" name="statusRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label htmlFor="statusRadio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                            </div>
                            <div className="flex items-center">
                                <input checked id="statusRadio-2" type="radio" value="" name="statusRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label htmlFor="statusRadio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button type="submit" className="shadow bg-gradient-to-r from-cyan-500 to-blue-500 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded">
                        Save Contact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateContact;