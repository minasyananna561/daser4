import React, { useRef, useState } from "react";
export let Page3 = () => {
    const [arr, setArr]=useState([])
    const [inp, setInp]=useState('')
    const [sum, setSum]=useState(0)
   const input1 =useRef(null)

   let plus=()=>{
    console.log(arr);
    let plusAll=arr.reduce((a,b)=>a+b);
    setSum(plusAll);
    input1.current.value=plusAll
   }

    return(
        <div>
<label>
    valu1
    <input value={inp} onChange={(e)=>setInp(e.target.value*1)}/>
</label>
<button onClick={()=>{
    setArr([...arr,inp]);
    setInp("")
}}>
    Add
</button> 
<br/>
<label>
    valu2
    <input ref={input1}/>
</label>
<button onClick={plus}>
   Sum All values
</button> 
<ol type="I">
    {arr.map((el,index)=>(
       <li 
       key={index} 
       onClick={()=>{
        setArr(arr.filter((elem)=>elem > el))
        
       }}
      >
        {el}
       </li> 
    ))}
</ol>
<button
onClick={()=>{
   
    arr.map((el)=> console.log('number is' + " "+el))
}}
>
Console log items
</button>

        </div>
    )
}