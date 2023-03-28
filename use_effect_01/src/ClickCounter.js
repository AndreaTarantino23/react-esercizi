import React, { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(currentValue => currentValue + 1)
    }

    function onCounterChange() {

        console.log(`The counter is now ${counter}`)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={(event) => [handleCounterIncrement(), onCounterChange()]}>Increment</button>
        </div>
    )
}