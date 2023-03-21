import React from 'react'

const initialList = [
    {
      id: 'a',
      name: 'Robin',
    },
    {
      id: 'b',
      name: 'Dennis',
    },
  ];
function Page9() {
    const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');

const handleChange=(event)=>{
    setName(event.target.value);
  }

 const handleAdd=()=> {
    const newList = list.concat({ name });

    setList(newList);
 
  }


  return (
    <div>
         <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page9