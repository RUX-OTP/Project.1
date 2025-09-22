import React, { useState } from 'react';

const Service = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = () => {
    fetch('http://localhost:5000/api/service/send', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ to: number, message })
    }).then(res => res.json())
      .then(data => alert(data.success ? 'OTP sent!' : data.error));
  };

  return (
    <div>
      <h2>Send OTP</h2>
      <input placeholder="Recipient Number" value={number} onChange={e => setNumber(e.target.value)} />
      <input placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
    </div>
  );
};

export default Service;
