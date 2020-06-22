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

    const handleNewUserRegister = useCallback(() => {
        if (email.length === 0 || !validateRegex("email", email)) {
            toast.error("Enter valid email address");
            return;
        }
        if (password.length === 0) {
            toast.error("Enter Password");
            return;
        }
        if (displayName.length === 0) {
            toast.error("Enter display name");
            return;
        }
        const payload = {
            email,
            username,
            displayName,
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