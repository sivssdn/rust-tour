import React from 'react';

interface Props {
    header: string;
}

const Main = (header: string) => {
    return (
        <div className="row">
            <div className="card background-color col l7 m7 s12 pull-l1">
                <p>
                    {header}
                    Edit <code>src/App.tsx</code> and save to reload.
                 </p>
            </div>
        </div>
    );
}

const Description: React.FC<Props> = ({ header }) => {
    // const Description = () => {
    const css = `.background-color{
        background-color: #2f54eb;
        color: #ffffff;
    }`;
    return (
        <>
            {Main(header)}
            <style>{css}</style>
        </>
    );
}

export default Description;
