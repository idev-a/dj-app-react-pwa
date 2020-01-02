import React from 'react';
import cx from "classnames";
import content from "./content";
import "./SongCardComponent.styles.scss";
import Icon from "../../../common/IconComponent";
import { useAudio } from 'react-use';

const SongCardComponent = ({ tag, songTitle, songLength, type }) => {
    let mediaContents;
    if (type === "audio") {
        mediaContents = 
        <audio 
            id="audiotag1" 
            src="./sample.mp3" 
            preload="auto">
        </audio>
    } else {
        mediaContents = 
        <iframe 
            width="" 
            height="" 
            className="discoverIFrame"
            src="https://www.youtube.com/embed/tiF-q2h7tSA" 
            title="video-iframe"
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    };

    return (
        <div className="songCardComponentContainer">
            <div className="profilePicIconContainer">
                <Icon className={cx("profilePicIcon")} iconName={"profilepic"} />
            </div>
            <div className="artistTagContainer">
                {tag}
            </div>
            <div className="songContainer">
                {mediaContents}
                <div className="songTitle">
                    {songTitle}
                </div>
                <div className="songLength">
                    {songLength}
                </div>
            </div>
        </div>
    );
};

SongCardComponent.defaultProps = {
    tag: "@pinkfloyd",
    songTitle: "Wish You Were Here",
    songLength: "6:08",
    type: "video"
};

export default SongCardComponent;