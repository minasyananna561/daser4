import React, { useState } from "react";

export let Page4 = () => {
  
  let [query,setQuery]=useState("")

  const course = {
    name: "react js",
    lesson: [
      {
        id: 1,
        name: "useState",
        class_times: 3,
        exercises: 10,
      },
      {
        id: 2,
        name: "useEffect",
        class_times: 2,
        exercises: 7,
      },
      {
        id: 3,
        name: "useRef",
        class_times: 4,
        exercises: 14,
      },
      {
        id: 4,
        name: "useNavigate",
        class_times: 3,
        exercises: 8,
      },
      {
        id: 5,
        name: "useMemo",
        class_times: 2,
        exercises: 6,
      },
      {
        id: 6,
        name: "useReducer",
        class_times: 4,
        exercises: 14,
      },
      {
        id:7,
        name: "useContext",
        class_times: 3,
        exercises: 8,
      },
      {
        id: 8,
        name: "useCallback",
        class_times: 2,
        exercises: 6,
      },
    ],
  };

  const total = course.lesson.reduce((a, b) => a + b.exercises, 0);
  const total1 = course.lesson.reduce((a, b) => a + b.class_times, 0);
  return (
    <div>
      <div  style={{marginLeft:600}}>
             <input
        type="text"
         placeholder="Search ..." 
        
         onChange={(e)=>setQuery(e.target.value) }
         /> 
         </div>

      <h1 style={{ marginLeft: 600 }}>react js lessons </h1>

      <table style={{ margin: "auto", border: "solid", width: "300px" }}>
        
        <tbody style={{ margin: "auto", border: "solid" }}>
          <tr style={{ border: "solid" }}>
            <th style={{ border: "solid" }}>name</th>
            <th style={{ border: "solid" }}>class_times</th>
            <th style={{ border: "solid" }}> exercises</th>
          </tr>
          
          {course.lesson
          .filter((item)=>item.name.toLowerCase().includes(query))
          .map((item, index) => {
            return (
              <tr key={index} style={{ border: "solid" }}>
                <td style={{ border: "solid" }}>{item.name}</td>
                <td style={{ border: "solid" }}>{item.class_times}</td>
                <td style={{ border: "solid" }}>{item.exercises}</td>
              </tr>
            );
          })}
          <tr style={{ color: "red" }}>
            <td>sum</td>
            <td>{total1}</td>
            <td> {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
