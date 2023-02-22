import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count>=1) {
        document.title = `Chats (${count})`;
    } else {
        document.title = `Chats `;
    }
  }, [count]);
  const increse = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increse}>
        Increse by 1
      </button>
      <button className="btn" onClick={decrese}>
        Decrese by 1
      </button>
    </div>
  );
};

export default UseEffect;
