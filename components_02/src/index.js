import React from "react"
import { Hello } from "./Hello"
import ReactDOM from "react-dom"

const helloWorldElement = <Hello />
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(helloWorldElement);