import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const reform = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(reform.current);

        const serviceID = 'service_add6dug';
        const templateID = 'template_zwapu9h';

        const apikey = "XBy6i51R-IGbSthXw";

        emailjs.sendForm(serviceID, templateID, reform.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text));
    };

    return (
        <form ref={reform} onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="Header-contact">
                <h2 className="block text-gray-700 text-sm font-bold mb-2">Contact us</h2>
                <p className="text-gray-700 text-base">Please fill out the form below to contact us.</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='Username' type="text" placeholder='ej: Nicolas Ortiz' required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='ej: Nicolas Ortiz' type="email" name='email' id='email' required />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    maxLength="500" placeholder='Type your message' name='message' id='message' cols="30" rows="5" />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
