import React from 'react';


const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3>Contact</h3>
          <p style={paragraphStyle}>Email: biniadal92@gmail.com</p>
          <p style={paragraphStyle}>Phone: +251 965387619</p>
        </div>

        <div style={columnStyle}>
          <h3>Links</h3>
          <ul style={listStyle}>
            <li>
              <a href="/" style={linkStyle}>Home</a>
            </li>
            <li>
              <a href="/about" style={linkStyle}>About</a>
            </li>
            <li>
              <a href="/cart" style={linkStyle}>Cart</a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>Contact</a>
            </li>
            <li>
              <a href="/payment" style={linkStyle}>Payment</a>
            </li>
            <li>
              <a href="/services" style={linkStyle}>Services</a>
            </li>
          </ul>
        </div>

        <div style={columnStyle}>
          <h3>Social Media</h3>
          <ul style={listStyle}>
            <li>
              <a href="/" style={linkStyle}>Facebook</a>
            </li>
            <li>
              <a href="/" style={linkStyle}>Twitter</a>
            </li>
            <li>
              <a href="/" style={linkStyle}>Instagram</a>
            </li>
            <li>
              <a href="/" style={linkStyle}>Telegram</a>
            </li>
            <li>
              <a href="/" style={linkStyle}>Messenger</a>
            </li>
            <li>
              <a href="/" style={linkStyle}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={copyrightStyle}>
        <p  style={paragraphStyle}>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  height: '500px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
};

const columnStyle = {
  flex: 1,
  marginRight: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const paragraphStyle = {
  color: 'white', 
};

const copyrightStyle = {
  borderTop: '1px solid #555',
  paddingTop: '10px',
  marginTop: '200px',
  textAlign: 'center',
};

export default Footer;
