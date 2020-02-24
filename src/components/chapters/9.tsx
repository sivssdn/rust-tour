import React from "react";

const Chapter9: React.FC = () => {
    return (
        <p>
            Pointers are variables that points to a resource in memory.
            They themselves contains address of the resource they are pointing to. <br />
            Pointers are particularly useful while using <code>borrowing</code> feature on a variable. <br />
            In Rust, <code>&</code> (ampersand) keyword is used to create a pointer to a variable.
            <div className="section"></div>
            Exploring Structs next.
        </p>
    )
}

export default Chapter9;