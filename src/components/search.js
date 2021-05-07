import React, { useState } from "react";

const Search = ({valueInput}) => {
  const [items, setList] = useState();
  return (
    <>
      <div className="Search">
          <input 
          type="value" 
          name="search" 
          value = {valueInput}
          />
 
      </div>
    </>
  );
};

export default Search;
