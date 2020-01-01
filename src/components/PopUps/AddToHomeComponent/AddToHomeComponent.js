import React from 'react';
import cx from "classnames";
import content from "./content";
import "./AddToHome.styles.scss";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const AddToHomeComponent = (props) => {
    return (
        <div className="addToHomeContainer">
            <div className="iconContainer">
                <Icon className={cx("headerIcon")} iconName={"logo_hexagon"} />
                <Icon className={cx("cancelIcon")} iconName={"cancel"} />
            </div>
            <div className="homeHeader">
                {content.MAIN_HEADER}
            </div>
            <div className="mainIconContainer">
                <Icon className={cx("mainIcon")} iconName={"Group_48"} />
            </div>
            <div className="msgContainer">
                {content.MSG_PART_1}
                <Icon className={cx("installIcon")} iconName={"install"} />
                {content.MSG_PART_2}
                <br/>
                <span className="msgBold">
                    {content.MSG_PART_3}
                </span>
                {content.MSG_PART_4}
                <br/>
                {content.MSG_PART_5}
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