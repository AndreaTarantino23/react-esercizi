import React from "react";
import ReactDOM from "react-dom";

const a = 11
const b = 22

function sum(a, b) {
  return <h2> {a + b}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sum(a, b));
