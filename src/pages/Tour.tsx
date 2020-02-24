import React, { useState } from 'react';

import Description from "../components/DescriptionCard";
import IDECard from "../components/IdeCard";
import { ChapterNames, IdeLinks } from "../components/chapters/enums";
import Chapter0 from "../components/chapters/0";
import Chapter1 from "../components/chapters/1";
import Chapter2 from "../components/chapters/2";
import Chapter3 from "../components/chapters/3";
import Chapter4 from "../components/chapters/4";
import Chapter5 from "../components/chapters/5";
import Chapter6 from "../components/chapters/6";
import Chapter7 from "../components/chapters/7";
import Chapter8 from "../components/chapters/8";
import Chapter9 from "../components/chapters/9";
import Chapter10 from "../components/chapters/10";

const Tour = () => {
    const [currentChapter, setCurrentChapter] = useState(<Chapter0 />);
    const [chapterCount, setChapterCount] = useState(0);
    const chapters = [
        <Chapter0 />, <Chapter1 />, <Chapter2 />, <Chapter3 />, <Chapter4 />,
        <Chapter5 />, <Chapter6 />, <Chapter7 />, <Chapter8 />, <Chapter9 />, <Chapter10 />
    ];

    const changeChapter = () => {
        if (chapterCount < 10) setChapterCount(chapterCount + 1);
        setCurrentChapter(chapters[chapterCount + 1])
    }

    return (
        <div className="container">
            <div className="section"></div>
            <div className="row">
                <Description header={"Chapter " + chapterCount + ": " + ChapterNames[chapterCount]}
                    nextChapter={changeChapter}
                    chapterContent={currentChapter as unknown as React.FC}
                />
                <IDECard url={IdeLinks[chapterCount]} />
            </div>
        </div>
    );
}

export default Tour;
