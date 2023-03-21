import React, { useState } from "react"

let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56]

export let Page2=()=>{
  
    const [Filter, setFilter] = useState(numbers)

    const HandlerChange = e => {
        const value = e.target.value
        if (value === "even") {
          setFilter(
            numbers.filter(number => {
              if (number % 2 === 0) {
                return true
              }
              return false
            })
          )
        } else {
          setFilter(
            numbers.filter(number => {
              if (number % 2 !== 0) {
                return true
              }
              return false
            })
          )
        }
      }
    return(
        <div>
            <h2>Number filtering</h2>

      <input
        type="radio"
      name="even"
        id="even"
        value="even"
        onChange={HandlerChange}
      />
      <label htmlFor="even">Even</label>

       <input
        type="radio"
        name="even"
        id="odd"
        value="odd"
        onChange={HandlerChange}
      />
      <label htmlFor="odd">Odd</label>
      <ul>
        {Filter.map(number => {
          return <li key={number}>{number} </li>
        })}
        </ul>
        </div>
    )
}






