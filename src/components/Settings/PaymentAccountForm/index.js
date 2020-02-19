import React from "react";
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";
import PaymentCard from "./PaymentCard";

const PaymentAccountForm = ({
  paymentMethods,
  paymentIsOpen,
  togglePayment
}) => {
  console.log(paymentMethods);
  return (
    <section className="formContainer">
      <header onClick={togglePayment} className="formHeaderContainer">
        <span className="expandIcon">{!paymentIsOpen ? "+" : "-"}</span>
        <div className="formHeaderText">{content.SUBCONTAINER3_LABEL}</div>
      </header>
      {paymentIsOpen && (
        <React.Fragment>
          {paymentMethods &&
            paymentMethods.map(paymentMethod => (
              <div className="paymentCardsContainer">
                <PaymentCard {...paymentMethod} />
              </div>
            ))}
          {/*  <div className="buttonWrapper">
            <Button
              className="launchButton"
              buttonText={content.SUBCONTAINER3_BUTTON_TEXT}
            ></Button>
          </div> */}
        </React.Fragment>
      )}
    </section>
  );
};
PaymentAccountForm.defaultProps = {
  paymentMethods: []
};

export default PaymentAccountForm;
