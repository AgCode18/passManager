import React, { useState } from "react";
import AddPassword from "./components/AddPassword";
import PasswordList from "./components/PasswordList";
import SearchBar from "./components/SearcBar";
import Images from "./assets/n.jpg";


const App = () => {
  const [passwords, setPasswords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addPassword = (password) => {
    setPasswords([...passwords, password]);
  };

  const deletePassword = (index) => {
    setPasswords(passwords.filter((_, i) => i !== index));
  };

  const filteredPasswords = passwords.filter((item) =>
    item.website.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen   bg-cover bg-no-repeat " style={{ backgroundImage: `url(${Images})`}} >
        <h1 className=" bg-transparent backdrop-blur-lg text-white  text-2xl p-5 font-bold mb-6">
          Keeper
         
        </h1>

        <div className="max-w-4xl mx-auto grid gap-6 sm:p-6 md:p-8">
          <AddPassword onAdd={addPassword} />
          <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
          <PasswordList
            passwords={filteredPasswords}
            onDelete={deletePassword}
          />
        </div>
      </div>
    </>
  );
};

export default App;
