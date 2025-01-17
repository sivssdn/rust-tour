import React from 'react';

interface Props {
    header: string;
    chapterContent: React.FC;
    nextChapter: () => void;

}

const Description: React.FC<Props> = ({ header, nextChapter, chapterContent }) => {
    return (
        <div className="card description-card col l6 m6 s12">
            <div className=" description-container">
                <h3>Rust Tour</h3>
                <strong>{header}</strong>
                <hr />
                <div className="section"></div>
                {chapterContent}
                <div className="section"></div>
                {!header.toString().includes("New Beginning")
                    && (<a className="btn btn-medium yellow darken-4 next-chapter" onClick={nextChapter}>Next Chapter</a>)}
                <div className="section"></div>
            </div>
        </div>
    );
}

export default Description;
