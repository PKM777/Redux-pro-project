import { useState, useEffect } from "react";
import React from "react";

const Timer = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const times = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);

    return () => {
      clearInterval(times);
    };
  }, []);

  props.func(Number(count));
  return <h1>{count}</h1>;
};

export default Timer;
