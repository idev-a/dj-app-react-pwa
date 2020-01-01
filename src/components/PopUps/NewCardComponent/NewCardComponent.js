import React from 'react';
import cx from "classnames";
import content from "./content";
import "./NewCard.styles.scss";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const NewCardComponent = ({
    nameOnCard,
    cardNumber,
    expirationDate,
    cvc,
    onInputChange
}) => {
    return (
        <div className="newCardContainer">
            <div className="iconContainer">
                <Icon className={cx("headerIcon")} iconName={"logo_hexagon"} />
                <Icon className={cx("cancelIcon")} iconName={"cancel"} />
            </div>
            <div className="newCardHeaderContainer">
                {content.MAIN_HEADER}
            </div>
            <div className="inputFieldContainer">
                <div className="inputFieldHeader">
                    {content.INPUT_HEADER_1}
                </div>
                <InputField
                    id="nameOnCard"
                    onChange={onInputChange}
                    value={nameOnCard}
                    placeholder={content.INPUT_PLACEHOLDER_1}
                    className="inputField"
                />
                <div className="inputFieldHeader">
                    {content.INPUT_HEADER_2}
                </div>
                <InputField
                    id="cardNumber"
                    onChange={onInputChange}
                    value={cardNumber}
                    placeholder={content.INPUT_PLACEHOLDER_2}
                    className="inputField"
                />
                <div className="inputFieldRow">
                    <div className="inputFieldCols colLeft">
                        <div className="inputFieldHeader">
                            {content.INPUT_HEADER_3}
                        </div>
                        <InputField
                            id="expirationDate"
                            onChange={onInputChange}
                            value={expirationDate}
                            placeholder={content.INPUT_PLACEHOLDER_3}
                            className="inputField"
                        />
                    </div>
                    <div className="inputFieldCols">
                        <div className="inputFieldHeader">
                            {content.INPUT_HEADER_4}
                        </div>
                        <InputField
                            id="cvc"
                            onChange={onInputChange}
                            value={cvc}
                            placeholder={content.INPUT_PLACEHOLDER_4}
                            className="inputField"
                        />
                    </div>
                </div>
            </div>
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.SAVE_CARD_LABEL}
                onClick={""}
                ></Button>
            </div>
        </div>
    );
};

NewCardComponent.defaultProps = {
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
};

export default NewCardComponent;