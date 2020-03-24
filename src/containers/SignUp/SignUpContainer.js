import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import "../../scss/common.styles.scss";
import { registerUserAction } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";
import { toast } from "react-toastify";
import { validateRegex } from "../../utils";

const SignUpContainer = ({ registerUser, handleSuccess }) => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [fileToUpload, setFileToUpload] = useState(null);
  const handleNewUserRegister = useCallback(() => {
    if (password !== repeatPassword) {
      toast.error("Passwords dont match");
      return;
    }
    if (email.length === 0 || !validateRegex("email", email)) {
      toast.error("Enter valid email address");
      return;
    }
    if (displayName.length === 0) {
      toast.error("Enter display name");
      return;
    }
    if (username.length === 0) {
      toast.error("Enter username name");
      return;
    }
    const payload = {
      email,
      username,
      displayName,
      password
    };

    registerUser(payload, fileToUpload)
      .then(() => {
        handleSuccess();
      })
      .catch(() => {
        toast.error("User registration failed");
      });
  }, [
    password,
    repeatPassword,
    email,
    displayName,
    username,
    registerUser,
    fileToUpload,
    handleSuccess
  ]);

  const handleInputChange = e => {
    if (
      e.target.id === "profileImg" &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      setFileToUpload(e.target.files[0]);
    } else {
      let value = e.target.value;
      if (e.target.id === "email") {
        value = e.target.value.toLowerCase();
        setEmail(value);
      }
      if (e.target.id === "password") {
        setPassword(value);
      }
      if (e.target.id === "repeatPassword") {
        setRepeatPassword(value);
      }
      if (e.target.id === "displayName") {
        setDisplayName(value);
      }
      if (e.target.id === "username") {
        setUserName(value);
      }
    }
  };
  return (
    <SignUpComponent
      onInputChange={handleInputChange}
      email={email}
      username={username}
      displayName={displayName}
      password={password}
      repeatPassword={repeatPassword}
      fileToUpload={fileToUpload}
      registerUser={handleNewUserRegister}
    />
  );
};

const mapActions = dispatch => ({
  registerUser: (requestData, file) =>
    dispatch(registerUserAction(requestData, file))
});

const mapStateToProps = state => ({
  user: userSelector(state)
});

SignUpContainer.propTypes = {
  user: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapActions
)(SignUpContainer);
