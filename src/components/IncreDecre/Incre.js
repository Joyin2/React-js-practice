import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";

const Incre = () => {
  const [number, setNumber] = useState(0);
  const IncNum = () => {
    setNumber(number + 1);
  };
  const DecNum = () => {
    if (number <= 0) {
      return alert("zero limit reached");
    } else {
      setNumber(number - 1);
    }
  };
  return (
    <>
      <h1>{number}</h1>
      <Button variant="outlined" onClick={IncNum}>
        <AddCircleIcon sx={{ fontSize: 40 }} />
      </Button>
      <span onClick={DecNum}>
        <RemoveCircleIcon style={{ color: "red" }} sx={{ fontSize: 40 }} />
      </span>
    </>
  );
};

export default Incre;
