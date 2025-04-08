import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.user_name.trim()) {
      tempErrors.user_name = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.user_email) {
      tempErrors.user_email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      tempErrors.user_email = "Email inválido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "El mensaje es requerido";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      emailjs.sendForm(
        'service_add6dug',
        'template_zwapu9h',
        form.current,
        'XBy6i51R-IGbSthXw'
      )
        .then((result) => {
          setSubmitStatus('success');
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          form.current.reset();
        }, (error) => {
          setSubmitStatus('error');
          console.error('Error al enviar email:', error.text);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Message sent successfully! We'll be in touch soon.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> There was a problem sending your message. Please try again later.</span>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.user_name ? 'border-red-500' : ''}`}
          />
          {errors.user_name && <p className="text-red-500 text-xs italic">{errors.user_name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.user_email ? 'border-red-500' : ''}`}
          />
          {errors.user_email && <p className="text-red-500 text-xs italic">{errors.user_email}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
            rows="5"
          />
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
