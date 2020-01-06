import React from 'react';
import cx from "classnames";
import content from "./content";
import "./AddToHome.styles.scss";
import Icon from "../../../common/IconComponent";
import Button from "../../../common/Button";

const AddToHomeComponent = (props) => {
    return (
        <div className="addToHomeContainer">
            <div className="homeHeader">
                {content.MAIN_HEADER}
            </div>
            <div className="mainIconContainer">
                <Icon className={cx("mainIcon")} iconName={"Group_48"} />
            </div>
            <div className="descriptionContainer">
                {content.DESCRIPTION_PART_1}
                <Icon className={cx("installIcon")} iconName={"install"} />
                {content.DESCRIPTION_PART_2}
                <br/>
                <span className="descriptionBold">
                    {content.DESCRIPTION_PART_3}
                </span>
                {content.DESCRIPTION_PART_4}
                <br/>
                {content.DESCRIPTION_PART_5}
            </div>
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.OK_LABEL}
                onClick={""}
                ></Button>
            </div>
        </div>
    );
};

AddToHomeComponent.defaultProps = {

};

export default AddToHomeComponent;