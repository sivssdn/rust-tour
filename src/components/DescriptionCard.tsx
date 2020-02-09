import React from 'react';

interface Props {
    header: string;
    chapterContent: React.FC;
    nextButtonText: string;
    nextChapter: () => void;
}

const Description: React.FC<Props> = ({ header, nextChapter, nextButtonText, chapterContent }) => {
    return (
        <div className="card description-card col l6 m6 s12">
            <div className=" description-container">
                <h3>Rust Tour</h3>
                <strong>{header}</strong>
                <hr />
                <div className="section"></div>
                {chapterContent}
                <div className="section"></div>
                <a className="btn btn-medium yellow darken-4 next-chapter" onClick={nextChapter}>{nextButtonText}</a>
            </div>
        </div>
    );
}

export default Description;
