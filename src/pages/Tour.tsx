import React, { useState } from 'react';

import Description from "../components/DescriptionCard";
import IDECard from "../components/IdeCard";
import Chapter0 from "../components/chapters/0";
import Chapter1 from "../components/chapters/1";

const Tour = () => {
    const [currentChapter, setCurrentChapter] = useState(<Chapter0 />);
    const [chapterCount, setChapterCount] = useState(1);
    const chapters = [
        <Chapter0 />, <Chapter1 />
    ];

    const changeChapter = () => {
        if (chapterCount < 10) setChapterCount(chapterCount + 1);
        setCurrentChapter(chapters[chapterCount])
    }


    return (
        <div className="container">
            <div className="section"></div>
            <div className="row">
                <Description header="Chapter 1: Hello World"
                    nextButtonText="Next Chapter"
                    nextChapter={changeChapter}
                    chapterContent={currentChapter as unknown as React.FC}
                />
                <IDECard />
            </div>
        </div>
    );
}

export default Tour;
