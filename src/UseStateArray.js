import React from "react";

const UseStateArray = () => {
  const biodata = [
    {
      id: 0,
      name1: "ahmed",
      age: 25,
    },
    {
      id: 1,
      name2: "arsalan",
      age: 28,
    },
    {
        id: 2,
        name2: "ameen",
        age: 30,   
    }
 ,   {
        id: 3,
        name2: "sam",
        age: 30,   
    }
  ];

  console.log(biodata);

  return (
    <>
      {biodata.map((currentvalue) => {
        return (
          <h1 key={currentvalue.id}>
            
            {currentvalue.name1} Age:{currentvalue.age}
          </h1>
        );
      })}
      <div>
        <h1 className="text-warning bg-success">use state with array</h1>
        {/* <h1>use state with array</h1>
            <h1>use state with array</h1> */}
      </div>
    </>
  );
};
export default UseStateArray;
