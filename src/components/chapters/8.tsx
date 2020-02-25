import React from "react";

const Chapter8: React.FC = () => {
    return (
        <div>
            Function <code>main</code> is the entry point of Rust programs.
            Rust follows snake case as the conventional style for function and variable names<br />
            The types of function arguments need to be defined.<br />
            Function return values are specified by mentioning types they return. A function can have multiple return values. <br />
            To return a value from function, <code>return</code> keyword is not required.
            Specifying the return value without semicolon inside the function does the trick. <br />
            Rust also support closures. The syntactic difference is that pipe needs to be used for function arguments.
            The scope of closures includes their enclosing function's scope along with their immediate scope.
            <div className="section"></div>
            Let's check Pointers next.
        </div>
    )
}

export default Chapter8;