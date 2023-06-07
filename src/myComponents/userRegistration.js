import React, { useState } from 'react';

function UserRegistration({ onUserAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      const newUser = {
        id: Math.random().toString(),
        name: name
      };
      onUserAdd(newUser);
      setName('');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegistration;
