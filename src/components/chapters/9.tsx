import React from "react";

const Chapter9: React.FC = () => {
    return (
        <div>
            Pointers are variables that points to a resource in memory.
            They themselves contains address of the resource they are pointing to.
            <div className="section"></div>
            Pointers are particularly useful while using <code>borrowing</code> feature on a variable.
            <div className="section"></div>
            In Rust, <code>&</code> (ampersand) keyword is used to create a pointer to a variable.
            <div className="section"></div>
            Exploring Structs next.
        </div>
    )
}

export default Chapter9;