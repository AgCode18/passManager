import React, { useState } from 'react'
import { encrypt } from './utils/crypto';

function AddPassword({ onAdd }) {

    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const encryptedPassword = encrypt(password);
        onAdd({ website, username, password: encryptedPassword });  
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    return (
        <form
          onSubmit={handleSubmit}
          className="bg-transparent backdrop-brightness-50 p-10 rounded-md shadow-md h-full space-y-4 min-w-screen"
        >
          <input
            type="text"
            placeholder="Enter Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      );
    };

export default AddPassword