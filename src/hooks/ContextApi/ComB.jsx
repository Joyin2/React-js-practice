import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const ComB = () => {
  return (
    <div>
      <FirstName.Provider value={"Joyin"}>
        <LastName.Provider value={"Laskar"}>
          <ComA/>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default ComB
export {FirstName, LastName}
