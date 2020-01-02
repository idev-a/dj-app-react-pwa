import React from 'react';
import cx from "classnames";
import content from "./content";
import "./Discover.styles.scss";
import Icon from "../../common/IconComponent";
import SongCard from "../../containers/Discover/SongCard";

const DiscoverComponent = (props) => {
    return (
        <div className="discoverComponentContainer">
            <Icon className={cx("backgroundIcon")} iconName={"Path85"} />
            <div className="discoverComponentHeader">
                <Icon className={cx("headerIcon")} iconName={"logo86"} />
                <div className="title1">
                    {content.TITLE_1}
                </div>
                <div className="title2">
                    {content.TITLE_2}
                </div>
            </div>
            <div className="songCardContainer">
                <Icon className={cx("bookmarkIcon")} iconName={"bookmark1"} />
                <SongCard 

                />
            </div>
        </div>
    );
};

DiscoverComponent.defaultProps = {
    
};

export default DiscoverComponent;