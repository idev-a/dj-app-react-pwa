import React, { useState, useCallback, useEffect } from "react";
import ResetPassword from "../../components/ForgotPassword/ResetPassword";
import { toast } from "react-toastify";
import { resetPassword } from "../../state/actions/userActions";

const ResetPasswordContainer = ({ history }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const query = new URLSearchParams(history.location.search);
    const resetToken = query.get("resetToken");
    if (!resetToken) {
      toast.error("Invalid request !!");
      history.push("/");
    }
  }, [history]);

  const handleResetPasswordClick = useCallback(() => {
    if (password !== repeatPassword) {
      toast.error("Passwords do not match !!");
      return;
    }
    const query = new URLSearchParams(history.location.search);
    const resetToken = query.get("resetToken");
    const payload = {
      resetToken,
      password
    };
    resetPassword(payload).then(res => {
      if (res.ok) {
        toast.success("Success. Please login !!");
        history.push("/signin");
      } else {
        toast.error("Failed to reset. Please try again");
        history.push("/");
      }
    });
  }, [history, password, repeatPassword]);

  const onInputChange = useCallback(e => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setRepeatPassword(e.target.value);
    }
  }, []);

  return (
    <ResetPassword
      isLoading={isLoading}
      password={password}
      repeatPassword={repeatPassword}
      onInputChange={onInputChange}
      handleResetPasswordClick={handleResetPasswordClick}
    />
  );
};

export default ResetPasswordContainer;
