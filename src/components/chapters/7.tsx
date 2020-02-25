import React from "react";

const Chapter7: React.FC = () => {
    return (
        <div>
            Following are the control flow loops.
            <div className="section"></div>
            - <code>loop</code> : Infinite loop without any exit statement to end the loop.
            <code>break</code> keyword works just fine in case you want to terminate the loop. <br />
            - <code>while</code> : Loop with exit conditional. <br />
            - <code>for</code> : The good old for loop.
            <div className="section"></div>
            Loops have a label feature that can be used in conjunction with continue statement to jump.
            <div className="section"></div>
            Notice that you do not need parenthesis with while or if statements.
            <div className="section"></div>
            Try count++
            <div className="section"></div>
            Functions coming up next.
        </div>
    )
}

export default Chapter7;