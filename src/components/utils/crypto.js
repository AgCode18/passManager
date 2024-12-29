// src/utils/crypto.js
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key';

export const encrypt = (text) => CryptoJS.AES.encrypt(text, SECRET_KEY).toString();

export const decrypt = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
