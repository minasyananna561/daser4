import React, { useState } from 'react'

function Page8() {
    const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      //  Get input value
      setUpdated(message);
    }
  };
  return (
    <div>
        <input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <h2>Message: {message}</h2>

      <h2>Updated: {updated}</h2>
    </div>
  )
}

export default Page8