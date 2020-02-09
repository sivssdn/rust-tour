import React from "react";

interface Props {
    url: string;
}
const IDECard: React.FC<Props> = ({ url }) => {
    return (
        <>
            <div className="card col l6 m6 s12 ide-card">
                <iframe src={url}></iframe>
            </div>
        </>
    );
}

export default IDECard;