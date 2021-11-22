import React,{useState,useEffect} from 'react'

const Api = () => {
const [data,setData] =useState([])

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setData(json))

    console.log(data)

    useEffect(() => {
        return () => {
        setData()
            
        }
    }, [])

    console.log(data)
  
    return (
        <>
        <h1 className="text-center text-danger">Api with fetch and Axios</h1>

        <div>All Deaths</div>
            {
                data.length >0 ? data.map((val) => {
                    return (
                    <p>{val.death}</p>
                    )
                }):<p>No Data</p>
            }
            
        </>
    )




}
export default Api;
