import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const ComB = () => {
  return (
    <div>
      <FirstName.Provider value={"Joyin"}>
        <ComA />
      </FirstName.Provider>
    </div>
  );
}

export default ComB
export {FirstName}
