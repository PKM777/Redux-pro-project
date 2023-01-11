import React, { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return { count: state.count + 1 };
  } else {
    return { count: state };
  }
};

const UseRed = (props) => {
  //   const [text, setText] = useState(0);

  const players = {
    player1: null,
    player2: { name: "bill" },
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      {props.clock % 2 === 0 && <h1>show the text</h1>}
      {players.forEach((player) => {
        return <h1>{player.name}hello</h1>;
      })}
    </div>
  );
};

export default UseRed;
