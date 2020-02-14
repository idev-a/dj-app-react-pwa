import React from 'react';
import "./styles.scss";
import content from "./content";
import Checkbox from "rc-checkbox";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const HearBKBalance = () => {
    return (
        <section className="balanceContainerLarge">
            <div className="balanceContainer">
                <header className="balanceHeader">
                    <Checkbox
                        className="checkBoxStyle"
                        name="useHearBKBalance"
                        checked=""
                        onChange=""
                    />
                    <Icon className="logoIcon" iconName="hearbk_balance_logo" />
                    <div className="headerLabel">{content.HEARBK_BALANCE}</div>
                </header>
                <div className="allOrSomeContainer">
                    <div className="allContainer">
                        <label className="containerLabel">{content.ALL}</label>
                        <div className="containerRow">
                            <InputField 
                                className="radioInputField"
                                type="radio"
                                value="1"
                            />
                            <div className="currency">{content.CURRENCY}</div>
                            <div className="amountContainer">
                                <div className="amount">
                                    15
                                </div>
                                <div className="decimalPart">.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="someContainer">
                        <label className="containerLabel">{content.SOME}</label>
                        <div className="containerRow">
                            <InputField 
                                className="radioInputField"
                                type="radio"
                                value="2"
                            />
                            <div className="inputFieldContainer">
                                <div className="currency">{content.CURRENCY}</div>
                                <InputField 
                                    className="inputField"
                                    value=""
                                />                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className="afterPaymentHeader">
                    {content.BALANCE_AFTER_PAYMENT}
                    <span className="afterPaymentBalance">&nbsp;$250.00</span>
                </div>
            </div>
            <div className="buttonWrapper">
                <Button
                    className="addFundsButton"
                    onClick={""}
                    buttonText={content.ADD_FUNDS}
                />
            </div>
        </section>
    );
};

export default HearBKBalance; 