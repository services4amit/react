import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildOne = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    count,
  }));

  const updateCount = () => {
    setCount((c) => Math.random());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>Random Number</button>
    </div>
  );
});

export default ChildOne;
