import React from 'react'
import { useState,useEffect } from 'react'

function Filter() {
  const [value,setValue] = useState([])

//   useEffect(() => {
      
    
        
//    },[]);

//    const Value = ()=>{

//     setValue("")


//     }
//     console.log()

   
    return (
        <>

        {
            Array.map =((currentvalue)=>{
               return <p>{currentvalue}</p>
              })
        }

     
        <div className="text-center">
            <h1 className="text-success">Api fetch Data</h1> 
        </div>

        </>
    )
}

export default Filter

