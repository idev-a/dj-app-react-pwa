import React, { useState, useCallback } from "react";
import ForgotPassword from "../../components/ForgotPassword";
import { forgotPassword } from "../../state/actions/userActions";
import { validateRegex } from "../../utils";
import { toast } from "react-toastify";

const ForgotPasswordContainer = () => {
  const [email, setEmail] = useState("");

  const onInputChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handleSubmitClick = useCallback(() => {
    if (!validateRegex("email", email)) {
      toast.error("Please enter valid email !!");
      return;
    }
    forgotPassword(email).then(res => {
      if (res.ok) {
        toast.success("Email sent for reset !!");
      } else {
        toast.error("Email address does not exist !!");
      }
    });
  }, [email]);

  return (
    <ForgotPassword
      email={email}
      onInputChange={onInputChange}
      handleSubmitClick={handleSubmitClick}
      Î
    />
  );
};

export default ForgotPasswordContainer;
