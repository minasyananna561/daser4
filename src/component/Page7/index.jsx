import React, { useState } from "react";
import "./index.css";
const USERS = [
  { id: 1, name: "Ando", age: 32 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Anahit", age: 40 },
  { id: 4, name: "Karen", age: 50 },
  { id: 5, name: "Sima", age: 30 },
  { id: 6, name: "Simon", age: 68 },
  { id: 7, name: "Tom", age: 34 },
  { id: 8, name: "Te", age: 28 },
  { id: 9, name: "Boris", age: 23 },
  { id: 10, name: "Beno", age: 60 },
  { id: 11, name: "Ivan", age: 18 },
  { id: 12, name: "Alina", age: 40 },
  { id: 13, name: "Kirakos", age: 50 },
  { id: 14, name: "Samson", age: 30 },
  { id: 15, name: "Gegham", age: 68 },
  { id: 16, name: "Dero", age: 34 },
  { id: 17, name: "Eprem", age: 50 },
  { id: 18, name: "Zven", age: 30 },
  { id: 19, name: "Iveta", age: 68 },
  { id: 20, name: "Lena", age: 34 },
];
export let Page7 = () => {
    // the value of the search field 
  const [name, setName] = useState("");
   // the search result
  const [users, setUsers] = useState(USERS);

  const handleChang = (e) => {
    const value = e.target.value;

    if (value !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setUsers(results);
    } else {
      setUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(value);
  };
  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={handleChang}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {users && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h4 style={{color:"red"}}>No results found!</h4>
        )}
      </div>
    </div>
  );
};
