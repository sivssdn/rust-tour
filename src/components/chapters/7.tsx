import React from "react";

const Chapter7: React.FC = () => {
    return (
        <p>
            Following are the control flow loops.
            <div className="section"></div>
            - <code>loop</code> : Infinite loop without any exit statement to end the loop.
            <code>break</code> keyword works just fine in case you want to terminate the loop. <br />
            - <code>while</code> : Loop with exit conditional. <br />
            - <code>for</code> : The good old for loop.
            <div className="section"></div>
            Loops have a label feature that can be used in conjunction with continue statement to jump.
            <div className="section"></div>
            Functions coming up next.
        </p>
    )
}

export default Chapter7;