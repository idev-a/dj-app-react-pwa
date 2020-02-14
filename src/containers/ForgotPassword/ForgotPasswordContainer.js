import React, { useState } from 'react';
import ForgotPassword from "../../components/ForgotPassword";

const ForgotPasswordContainer = ({
    email,
    isForgotPassword,
    setIsForgotPassword,
    onInputChange
}) => {
    const [isContinue, setIsContinue] = useState(false);
    return (
        <ForgotPassword
            email={email}
            isForgotPassword={isForgotPassword}
            setIsForgotPassword={setIsForgotPassword}
            isContinue={isContinue}
            setIsContinue={setIsContinue}
            onInputChange={onInputChange}
        />
    );
};

export default ForgotPasswordContainer; 