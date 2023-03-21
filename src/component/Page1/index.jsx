import React, { useRef, useState } from "react";
export let Page1 = () => {
  const [term, setTerm] = useState("");
  const [myData, setMyData] = useState([]);
  const [sum, setSum] = useState(0);

  // form submission and data addition
  const onSubmit = (e) => {
    e.preventDefault();
    setMyData([...myData, term]);
    setTerm("");
  };

  // delete items
  const onDelete = (p) => {
    const updates =myData.length>0&& myData.filter((el) => el > p);
    setMyData(updates);
  };
  const input1 = useRef(null);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(+e.target.value)} />
        <button>send</button>
      </form>
      <div>
        <input ref={input1} />

        <button
          onClick={() => {
            console.log(myData);
            let plusAll =!!myData.length? myData.reduce((a, b) => a + b):0
            setSum(plusAll);
            input1.current.value = plusAll;
          }}
        >
          Sum all values
        </button>
      </div>
    <ol type="I"> 
        {myData.map((each, idx) => (
          <li key={idx} onClick={() => onDelete(each)}>
            {each}
          </li>
        ))}
      </ol>
    
      <button
        onClick={() => {
          myData.forEach((el) => console.log("number is" + " " + el));
        }}
      >
        console log items
      </button>
    </div>
  );
};
