import React from 'react';
import content from "./content";
import "./PriceComponent.styles.scss";
import InputField from "../../../common/InputField";
import TextAreaField from "../../../common/TextAreaField";

const PriceComponent = ({
    price, 
    sendMe, 
    describeSelf,
    onInputChange
}) => {
    return (
        <React.Fragment>
            <div className="detailsHeader">
                {content.PRICE_LABEL}
            </div>
            <div className="priceDescription">
                {content.PRICE_DESCRIPTION}
            </div>
            <div className="containerLabel">
                {content.PRICE_LABEL}
                <div className="priceSign">
                    $
                </div>
            </div>
            <InputField 
                id="price"
                onChange={onInputChange}
                value={price}
                placeholder={content.PRICE_PLACEHOLDER}
                className="inputField"
                hasIcon                
            />
            <div className="containerLabel">
                {content.SEND_ME_LABEL}
            </div>
            <div className="sendMeDescriptionA">
                {content.SEND_ME_DESCRIPTION_A}
            </div>
            <div className="sendMeDescriptionBContainer">
                <span className="sendMeDescriptionBIntro">
                    e.g.
                </span>
                &nbsp;
                <span className="sendMeDescriptionBMain">
                    {content.SEND_ME_DESCRIPTION_B}
                </span>
            </div>
            <div className="sendMeTitleContainer">
                <span className="sendMeTitleA">
                    {content.SEND_ME_TITLE_A}
                </span>
                &nbsp;&nbsp;
                <span className="sendMeTitleB">
                    {content.SEND_ME_TITLE_B}
                </span>
            </div>
            <TextAreaField 
                id="sendMe"
                onChange={onInputChange}
                value={sendMe}
                className="inputField"         
            />
            <div className="containerLabel bioLabel">
                {content.BIO_LABEL}
            </div>
            <div className="describeYourselfTitle">
                {content.DESCRIBE_YOURSELF_TITLE}
            </div>
            <TextAreaField 
                id="describeSelf"
                onChange={onInputChange}
                value={describeSelf}
                className="inputField"                
            />
        </React.Fragment>
    )
}

PriceComponent.defaultProps = {
    price: 5,
    sendMe: "",
    describeSelf: ""
}

export default PriceComponent;