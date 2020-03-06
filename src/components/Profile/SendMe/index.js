import React, { useState } from "react";
import "./styles.scss";
import content from "./content";
import InputField from "../../../common/InputField";

const SendMe = ({ headline }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="formContainer">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="formHeaderContainer"
      >
        <span className="expandIcon">{!isOpen ? "+" : "-"}</span>
        <div className="formHeaderText">{content.SEND_ME}</div>
      </header>
      {isOpen && (
        <div className="formInputContainer">
          <InputField
            id="sendMe"
            className="formInputField"
            placeholder=""
            value={headline}
            disabled={true}
          />
        </div>
      )}
    </section>
  );
};

export default SendMe;
