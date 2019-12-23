import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import "../../scss/common.styles.scss";
import { registerUserAction } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const SignUpContainer = ({ registerUser }) => {
  const [userData, setUserData] = useState({});
  const [fileToUpload, setFileToUpload] = useState(null);
  const handleNewUserRegister = useCallback(() => {
    registerUser(userData);
  }, [registerUser, userData]);
  const handleInputChange = (e) => {
    if (
      e.target.id === "profileImg" &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      setFileToUpload(e.target.files[0]);
    } else {
      setUserData({
        ...userData,
        [e.target.id]: e.target.value,
      });
    }
  };
  return (
    <SignUpComponent
      onInputChange={handleInputChange}
      {...userData}
      registerUser={handleNewUserRegister}
    />
  );
};

const mapActions = (dispatch) => ({
  registerUser: (requestData) => dispatch(registerUserAction(requestData)),
});

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

SignUpComponent.propTypes = {
  user: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapActions
)(SignUpContainer);
