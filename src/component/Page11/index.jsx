import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export const Page11 = () => {
    const [people, setPeople] = useState([
        {
          firstName: "Poghos",
          lastName: "Poghosyan"
        },
        {
          firstName: "Simon",
          lastName: "Simonyan"
        }
      ]);
    
      const [person, setPerson] = useState({ firstName: "", lastName: "" });
    
      const onChange = event => {
        setPerson({ ...person, [event.target.name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault();
        if (person.firstName.trim() === "" || person.lastName.trim() === "") return;
    
        const newPerson = {
          firstName: person.firstName.trim(),
          lastName: person.lastName.trim()
        };
        setPeople([...people, newPerson]);
    
        person.firstName = "";
        person.lastName = "";
      };
  return (
    <div style={{width:"200px",height:"auto", marginLeft:"400px"}}>
        <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          name="firstName"
          placeholder="First Name"
          value={person.firstName}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          name="lastName"
          placeholder="Last Name"
          value={person.lastName}
          onChange={onChange}
        />
        <Button className="btn btn" type="submit" variant="secondary">
          Add Person
        </Button>
      </form>
      <hr />
      People:
      <div>
        {people.map(person => (
          <div key={person.id}>
            {person.firstName} {person.lastName}
          </div>
        ))}
      </div>
    </div>
  )
}
