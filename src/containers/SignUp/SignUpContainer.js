import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import "../../scss/common.styles.scss";
import { registerUserAction, uploadUserProfile } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const SignUpContainer = ({ registerUser, handleSuccess }) => {
  const [userData, setUserData] = useState({});
  const [fileToUpload, setFileToUpload] = useState(null);
  const handleNewUserRegister = useCallback(() => {
    registerUser(userData).then(async() => {
      const response =  await uploadUserProfile(fileToUpload,userData.email);
      if (response.ok) {
        handleSuccess();
      }
    });
  }, [registerUser, userData, fileToUpload, handleSuccess]);
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
