import React from "react";

const Chapter4: React.FC = () => {
    return (
        <p>
            Rust has two data types for representing strings based on where are allocated in memory. <br />
            <code>String</code> is a growable type stored in heap, whereas <code>str</code> is of fixed length stored somewhere in memory.
            <div className="section"></div>
            The difference between string length and capacity lies in actual length vs total memory allocated.
            E.g., To declare an empty string capable of storing 10 characters can be done with <code>String::with_capacity(10)</code>
            <div className="section"></div>
            <code>mut</code> keyword is required to make a variable mutable.
        </p>
    )
}

export default Chapter4;