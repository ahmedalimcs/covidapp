import React from "react";

const Func = () =>{

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json =>console.log(json))
  
  return <>
     
    <h1>Axios with React</h1>



  </>

}

export default Func;


