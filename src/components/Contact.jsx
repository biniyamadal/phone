import React from 'react';
import Fetch from './contact/Fetch';
import Footer from './contact/Footer';


const Contact = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: '34px',
          marginBottom: '20px',
          marginTop: '80px',
          color: '#3366cc',
          backgroundColor: '#C2D9FF',
        }}
      >
        Contact Us
      </h2>

      {/* Embed Google Map for Addis Ababa */}
      <iframe
        title="Addis Ababa Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.996764943097!2d39.16791531426542!3d9.145000693134168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163571021017ec13%3A0x7e9b5a59e82fd5f6!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1641597027566!5m2!1sen!2sus"
        width="90%"
        height="450"
        style={{ border: '0', margin: '0 auto', display: 'block',marginTop:'-20px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <br/>
      <Fetch/>
      <br/>
      <Footer/>

    </div>
  );
};

export default Contact;
