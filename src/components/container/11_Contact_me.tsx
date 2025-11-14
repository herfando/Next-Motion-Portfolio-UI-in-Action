import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className='w-full overflow-hidden bg-white px-6 py-16 text-gray-800'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2'>
        {/* Left Side */}
        <div className='order-2 space-y-6 md:order-1'>
          <h2 className='text-3xl font-bold text-purple-700'>
            I've been waiting for you.
          </h2>
          <p className='text-lg text-gray-600'>
            Fill in the form or
            <br />
            Send us an email
          </p>

          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <FaPhoneAlt className='text-purple-700' />
              <span className='text-gray-700'>+62 1234567890</span>
            </div>
            <div className='flex items-center gap-4'>
              <FaEnvelope className='text-purple-700' />
              <span className='text-gray-700'>edwinanderson@email.com</span>
            </div>
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='text-purple-700' />
              <span className='text-gray-700'>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form className='order-1 space-y-6 rounded-lg bg-gray-50 p-8 shadow-md md:order-2'>
          <h3 className='text-2xl font-semibold text-gray-800'>
            Send a Message
          </h3>

          <div className='space-y-4'>
            <input
              type='text'
              placeholder='Enter your name'
              className='w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none'
            />
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none'
            />
            <textarea
              rows={5}
              placeholder='Enter your message'
              className='w-full resize-none rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            className='flex items-center gap-2 rounded-md bg-purple-700 px-6 py-3 text-white transition hover:bg-purple-800'
          >
            <FaPaperPlane />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
