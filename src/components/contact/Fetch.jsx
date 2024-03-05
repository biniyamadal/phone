
import React, { useState } from 'react';
import './Fetch.css';

const Fetch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (submitted) {
    return <p className="success">We've received your message, thank you for contacting us!</p>;
  }

  return (
    <form onSubmit={submit} style={formStyles} className='Form'>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
};

const formStyles = {
  maxWidth: '400px',
  margin: '0 auto',
};

export default Fetch;
