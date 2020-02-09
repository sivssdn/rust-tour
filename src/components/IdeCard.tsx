import React from "react";

const IDECard: React.FC = () => {
    return (
        <>
            <div className="card col l6 m6 s12 ide-card">
                <iframe src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=dae1d124cfa1e3b1deea6c9589778dee"></iframe>
            </div>
        </>
    );
}

export default IDECard;