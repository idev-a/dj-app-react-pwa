import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EmailSignup from '../../components/EmailSignup/EmailSignup'
import { toast } from "react-toastify";
import { validateRegex } from "../../utils";
import { registerUserAction } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const EmailSignupContainer = ({ history, registerUser }) => {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const emailBack = useCallback(() => history.push("/signupScreen"), [
        history,
    ])
    const emailClose = useCallback(() => history.push("/signupScreen"), [
        history,
    ])
    const emailPage = useCallback(() => history.push("/emailSignin"), [
        history,
    ])

    
    const validateEmail = (value = "") => {
        const errorObject = {
            isError: false,
            errorMessage: "",
        };

        if (value) {
            if (value.replace(/[^@]/g, "").length > 1) {
                errorObject.isError = true;
                errorObject.errorMessage = "Your e-mail address Contains too many @ characters";
            } else if (value.match(/[~!#$^&*\s(=[}{)\]<>,\/:;'\"|\\`]/gim)) {
                errorObject.isError = true;
                errorObject.errorMessage = "Your e-mail address contains invalid characters";
            } else if (!value.match(/[A-Z0-9._%+-]+@/gim)) {
                errorObject.isError = true;
                errorObject.errorMessage = "An at (@) sign is missing in your Email Address";
            } else if (!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\./gim)) {
                errorObject.isError = true;
                errorObject.errorMessage = "The Domain in your e-mail address is missing a period";
            } else if (value.match(/(([A-Z0-9._%+-]+@[A-Z0-9-]\.[.]+\.[.])|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[.]))/gim)) {
                errorObject.isError = true;
                errorObject.errorMessage = "The Domain in your e-mail address has consecutive periods";
            } else if (!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim)) {
                errorObject.isError = true;
                errorObject.errorMessage = "The Domain in your e-mail address is missing a top level domain";
            }
        }

        return errorObject;
    }

    const handleNewUserRegister = useCallback(() => {
        if (displayName.trim().length === 0) {
            toast.error("Enter display name");
            return;
        }
        if (email.length === 0 || validateEmail(email).isError) {
            toast.error("Enter valid email address");
            return;
        }
        if (password.length === 0 || !validateRegex("password", password)) {
            toast.error("Password must contain uppercase, lowercase, numeric, special character and should be of atleast 6 character");
            return;
        }
        if(displayName.length < 3){
            toast.error("Name should contain atleast 3 character");
            return;
        }
        const payload = {
            email,
            username,
            displayName: displayName.trim(),
            password
        };

        registerUser(payload)
            .then(() => {
                history.push("/emailSignin");
            })
            .catch(() => {
                toast.error("User registration failed");
            });
    }, [
        password,
        email,
        displayName,
        username,
        registerUser,
        history,
    ]);

    const handleInputChange = e => {
        let value = e.target.value;
        if (e.target.id === "email") {
            value = e.target.value.toLowerCase();
            setEmail(value);
            setUserName(value);
        }
        if (e.target.id === "password") {
            setPassword(value);
        }
        if (e.target.id === "displayName") {
            setDisplayName(value);
        }
    };

    return (
        <EmailSignup
            emailBack={emailBack}
            emailClose={emailClose}
            emailPage={emailPage}
            onInputChange={handleInputChange}
            email={email}
            username={username}
            displayName={displayName}
            password={password}
            registerUser={handleNewUserRegister}
            validateEmail={validateEmail}
        />
    )
}

const mapActions = dispatch => ({
    registerUser: (requestData, file) =>
        dispatch(registerUserAction(requestData, file))
});

const mapStateToProps = state => ({
    user: userSelector(state)
});

EmailSignupContainer.propTypes = {
    user: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapActions
)(EmailSignupContainer);