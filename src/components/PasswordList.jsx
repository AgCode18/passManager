import React, { useState } from 'react';
import { decrypt } from './utils/crypto';

const PasswordList = ({ passwords, onDelete }) => {
  const [showPasswords, setShowPasswords] = useState(false);

  return (
    <div className="bg-transparent backdrop-brightness-50 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between  mb-4">
        <h2 className="text-lg font-semibold text-white">Your Passwords</h2>
        <label className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            checked={showPasswords}
            onChange={(e) => setShowPasswords(e.target.checked)}
          />
          <span>Show Passwords</span>
        </label>
      </div>
      <ul className="space-y-4">
        {passwords.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 rounded"
          >
            <div>
              <h3 className="font-medium">{item.website}</h3>
              <p>{item.username}</p>
              <p>
                {showPasswords ? decrypt(item.password) : '********'}
              </p>
            </div>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
