import React, { useCallback, useState, useEffect } from 'react'
import EmailResetPassword from '../../components/EmaiResetPassword/EmailResetPassword'
import { forgotPassword } from "../../state/actions/userActions";
import { validateRegex } from "../../utils";
import { toast } from "react-toastify";

const EmailResetPasswordContainer = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState("");

    const onInputChange = useCallback(e => {
        setEmail(e.target.value.toLowerCase());
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

    const setNewPassword = useCallback(() => props.history.push("/changePassword"), [
        props.history,
    ])
    const emailLoginBack = useCallback(() => props.history.push("/emailSignIn"), [
        props.history,
    ])
    const resetBack = useCallback(() => props.history.push("/emailSignIn"), [
        props.history,
    ])
    const resetClose = useCallback(() => props.history.push('/loginScreen'), [
        props.history,
    ])
    return (
        <EmailResetPassword
            emailLoginBack={emailLoginBack}
            setNewPassword={setNewPassword}
            resetBack={resetBack}
            resetClose={resetClose}
            email={email}
            onInputChange={onInputChange}
            handleSubmitClick={handleSubmitClick}
        />
    )
}

export default EmailResetPasswordContainer