import React, { useState } from 'react'

export const Page10 = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([{name: "First  item" }]);
  return (
    <div>
       
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button
        onClick={() => {
          
          setText([
            ...text,
            { name: ` State  count = ${count}` }
          ]);
        }}
      >
        Add Todo
      </button>
      <h3 style={{marginLeft:"50px"}}>{count}</h3>
      <ul>
        {text.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
