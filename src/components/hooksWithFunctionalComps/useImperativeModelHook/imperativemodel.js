import React, { useRef } from "react";

import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

const Parent = () => {
  const ref = useRef();

  return (
    <div>
      <ChildOne ref={ref} />
      <ChildTwo ref={ref} />
    </div>
  );
};

export default Parent;
