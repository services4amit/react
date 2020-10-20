import React, { forwardRef, useState } from "react";

const ChildTwo = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const checkCount = () => setCount(ref.current.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={checkCount}>Current Value</button>
    </div>
  );
});

export default ChildTwo;
