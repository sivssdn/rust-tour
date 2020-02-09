import React from 'react';

interface Props {
    header: string;
}

const Main = (header: string) => {
    return (
        <div className="card description-card col l6 m6 s12">
            <div className=" description-container">
                <h3>{header}</h3>
                <strong>Chapter 1: Hello World</strong>
                <div className="section"></div>
                <p>
                    The description of the chapter goes here.
                    </p>
            </div>
        </div>

    );
}

const Description: React.FC<Props> = ({ header }) => {
    const css = `.description-card{
        background-color: #2f54eb;
        color: #ffffff;
        min-height: 88vh; 
        max-height: 88vh; 
        overflow:scroll;
    }
    .description-container{
        margin-left:8%;
    }
    `;
    return (
        <>
            {Main(header)}
            <style>{css}</style>
        </>
    );
}

export default Description;
