import React, { createContext } from "react";
// import SpreadOperator from "./hooks/SpreadOperatorInUseState/SpreadOperator";
// import UseState from './hooks/UseState'
// import UseStateToggle from './toggle/UseStateToggle'
// import UseStateArray from "./hooks/UseStateArray/UseStateArray";
// import ShortCirtcuitEvaluation from "./components/ShortCircuitEval/ShortCirtcuitEvaluation";
// import Login from "./components/LoginForm/Login";
// import Covid from "./components/Covid";
// import UseEffect from "./hooks/UseEffect/UseEffect";
// import CleanUp from "./hooks/UseEffect/CleanUp";
// import CurrentTimeDate from "./components/CurrentTimeDate/index"
// import Greeting from "./components/GreetingWebsite"
// import SimpleCalculator from "./components/SimpleCalculator";
// import NetflixApp from "./components/NetflixApp";
// import SlotMachine from "./components/SlotMachineGame"
// import IncreDecre from "./hooks/IncreDecre/index"
import ComA from "./hooks/ContextApi/ComA";

const FirstName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Joyin"}>
        <ComA />
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName };
