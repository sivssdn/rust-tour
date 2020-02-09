import React from 'react';

interface Props {
    header: string;
}

const Main = (header: string) => {
    return (
        <div className="row">
            <div className="card description-card col l7 m7 s12 pull-l1">
                <div className=" description-container">
                    <h3>{header}</h3>
                    <strong>Chapter 1: Hello World</strong>
                    <div className="section"></div>
                    <p>
                        The description of the chapter goes here.
                    </p>

                </div>
            </div>
        </div>
    );
}

const Description: React.FC<Props> = ({ header }) => {
    // const Description = () => {
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
