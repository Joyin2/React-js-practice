import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="search anything"
        onChange={inputEvent}
        value={img}
      />
      {img === "" ? null : <SearchResult name={img} />}
    </>
  );
};

export default Search;
