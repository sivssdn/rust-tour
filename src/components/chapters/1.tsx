import React from 'react';

const Chapter1: React.FC = () => {
    return (
        <p>
            Let's start by feeling good about how easy 'Hello World' Program is.
            <div className="section"></div>
            Notice the ! (exclamation mark) after the <code>println</code>. It means <code>println</code> is not a function but a macro.
            <div className="section"></div>
            P.S. Do not forget the semicolon;
        </p>
    );
}

export default Chapter1;