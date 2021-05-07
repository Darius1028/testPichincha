import React, { useState, useEffect, useRef } from "react";
import Search from  "./search"


const Api = () => {
  const [items, setList] = useState();
  useEffect(() => { 
    updateData();
  },[]);

  /**
   * Calls upon search change
   * @memberof updateInput
   * @param e [Object] - the event from a text change handler
   */
  const updateData = async () => {
   
    await fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => {
          setList(data.results.slice(0, 20));
        });
  };

  return (
    <>
      <Search valueInput={""}  ></Search>
      <div className="items">
        {items.map((data, index) => {
          return (
            <div key={index} className="">
              <div>{data.name}</div>
              <div>{data.status}</div>
              <div>{data.origin.name}</div>
              <div>{data.gender}</div>
              <div>{data.type}</div>
              <div>
                <img
                  data-src={data.image}
                  alt={data.image}
                  src={data.image}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
