import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    let formValid = true;
    let errors = {};

    if (!formData.name) {
      formValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      formValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formValid = false;
      errors.email = 'Email is invalid';
    }

    if (!formData.message) {
      formValid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return formValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-teal-600">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-2">We'd love to hear from you! Reach out to us using the information below or fill out the contact form.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Get in Touch</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <span className="text-gray-800">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-blue-500 mr-2" />
            <span className="text-gray-800">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-blue-500 mr-2" />
            <span className="text-gray-800">info@springdale.edu</span>
          </div>
        </div>

        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                rows="5"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2919162571126!2d144.95373631531688!3d-37.81720927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57742c4531b5de7!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1629578328430!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
