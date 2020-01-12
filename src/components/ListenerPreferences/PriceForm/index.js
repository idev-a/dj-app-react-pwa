import React from 'react';
import content from "./content";
import "./styles.scss";
import InputField from "../../../common/InputField";
import TextAreaField from "../../../common/TextAreaField";

const PriceContainerComponent = ({
    price, 
    sendMe, 
    describeSelf,
    onInputChange
}) => {
    return (
        <React.Fragment>
            <header className="formHeaderContainer">
                <div className="formHeaderText">
                    {content.PRICE_LABEL}
                </div>
                <div className="formHeaderDescription">
                    {content.PRICE_DESCRIPTION}
                </div>
            </header>
            <div className="formInputContainer">
                <label for="price" className="formInputLabel" id="priceLabel">
                    {content.PRICE_LABEL}
                    <div className="priceSign">
                        $
                    </div>
                </label>
                <InputField 
                    id="price"
                    className="formInputField"
                    value={price}
                    onChange={onInputChange}
                    placeholder={content.PRICE_PLACEHOLDER}
                    hasIcon                
                />
                <label for="sendMe" className="formInputLabel">
                    {content.SEND_ME_LABEL}
                </label>
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
                    className="formInputField"         
                    value={sendMe}
                    onChange={onInputChange}
                />
                <label for="bio" className="formInputLabel">
                    {content.BIO_LABEL}
                </label>
                <div className="describeYourselfTitle">
                    {content.DESCRIBE_YOURSELF_TITLE}
                </div>
                <TextAreaField 
                    id="describeSelf"
                    className="formInputField"                
                    value={describeSelf}
                    onChange={onInputChange}
                />
            </div>
        </React.Fragment>
    )
}

PriceContainerComponent.defaultProps = {
    price: 5,
    sendMe: "",
    describeSelf: ""
}

export default PriceContainerComponent;