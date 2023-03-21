import React from "react"
import { useState } from "react"
const arr=[
    {id:1,
    name:"Poghos",
lastname:"Poghosyan",
age:60
},
{id:2,
    name:"Poghos",
lastname:"Poghosyan",
age:80
},
{id:3,
    name:"Petros",
lastname:"Petrosyan",
age:30
},
{id:4,
    name:"Levon",
lastname:"Levonyan",
age:18
},
{id:5,
    name:"Simon",
lastname:"Simonyan",
age:90
},
{id:6,
    name:"Simon",
lastname:"Hayroyan",
age:16},

]

export let Page6=()=>{
const [state,setState]=useState(arr)
const [query,setQuery]=useState("")
    return(
        <div>

            {/* {state.map((item)=><h3>{item.name}</h3>
                
            )} */}
             <input
            placeholder="search..."
            onChange={(e)=>
                setQuery(e.target.value)
               
             }
             style={{marginLeft:"620px",marginTop:"50px"}}
     />
                  <table style={{ margin: "auto", border: "solid", width: "300px",marginTop:"20px" }}>
        <tbody style={{ margin: "auto", border: "solid" }}>
          <tr style={{ border: "solid" }}>
            <th style={{ border: "solid" }}>
             name
     </th>
            <th style={{ border: "solid" }}>
                
              lastname
            </th>
            <th style={{ border: "solid" }}> 
           age
            </th>
          </tr>
          
          {state .filter((item)=>
       item.name.toLowerCase().includes(query)||item.lastname.toLowerCase().includes(query)||item.age<60) .map((item, index) => {
            return (
              <tr key={index} style={{ border: "solid" }}>
                <td style={{ border: "solid" }}>{item.name}</td>
                <td style={{ border: "solid" }}>{item.lastname}</td>
                <td style={{ border: "solid" }}>{item.age}</td>
              </tr>
            );
          })}
          
        </tbody>

      </table>
      {state.length === 0 && <span>No records found to display!</span>}



        </div>
    )
}