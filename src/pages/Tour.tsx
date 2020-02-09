import React from 'react';

import Description from "../components/DescriptionCard";
import IDECard from "../components/IdeCard";

const Tour = () => {
    return (
        <div className="container">
            <div className="section"></div>
            <div className="row">
                <Description header="Rust Tour" />
                <IDECard />
            </div>
        </div>
    );
}

export default Tour;
