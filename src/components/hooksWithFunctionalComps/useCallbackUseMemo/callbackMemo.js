import React, { useState, useMemo, useCallback } from "react";

const MemoFunc = (a, b) => {
  return a * b;
};

const MemoCallbackUsage = () => {
  let a = 2;
  let b = 3;

  const [callback, setCallBack] = useState(0);

  const memo = useMemo(() => MemoFunc(a, b), [a, b]);
  const callbackFunc = useCallback(
    () => setCallBack((callback) => callback + 1),
    [a, b]
  );

  return (
    <div style={{ padding: "15px" }}>
      <h1>Memo multiplication is {memo}</h1>
      <button onClick={callbackFunc}>Callback Button</button>
      <h1>callback count is {callback}</h1>
    </div>
  );
};

export default MemoCallbackUsage;
