import React, { useEffect, useState, useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { preferencsSelector } from "../../state/selectors/preferences";
import { userSelector } from "../../state/selectors/users";
import {
  getUserDetails,
  updateUserData,
  getPaymentMethods,
  cancelUserPremiumSubscription,
  uploadUserProfile,
} from "../../state/actions/userActions";
import { validateRegex } from "../../utils";

const SettingsContainer = ({
  getUserDetailsDispatchAction,
  getPaymentMethodsDispatchAction,
  userDetails,
  dispatchUpdate,
  paymentMethods,
  history,
}) => {
  const [profileIsOpen, toggleProfile] = useState(false);
  const [accountIsOpen, toggleAccount] = useState(false);
  const [paymentIsOpen, togglePayment] = useState(false);
  const [subscriptionIsOpen, toggleSubscription] = useState(false);
  const [userObject, setUserObject] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    Promise.all([
      getUserDetailsDispatchAction(),
      getPaymentMethodsDispatchAction(),
    ]);
  }, [getUserDetailsDispatchAction, getPaymentMethodsDispatchAction]);

  useEffect(() => {
    setUserObject({
      user_name: userDetails.user_name || "",
      display_name: userDetails.display_name || "",
      email: userDetails.email || "",
    });
  }, [userDetails]);

  const handleLogoutClick = useCallback(() => {
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("isPremiumUser");
    localStorage.removeItem("isFirstUserLogin");
    history.push("/signin");
  }, [history]);

  const handleProfileUpdate = useCallback(() => {
    let payload = {};
    if (
      userObject.user_name !== userDetails.user_name &&
      userObject.user_name.length !== 0
    ) {
      payload.user_name = userObject.user_name;
    }
    if (
      userObject.display_name !== userDetails.display_name &&
      userObject.display_name.length !== 0
    ) {
      payload.display_name = userObject.display_name;
    }
    if (userObject.email !== userDetails.email) {
      if (!validateRegex("email", userObject.email)) {
        toast.error("Invalid Email");
        return;
      }
      payload.email = userObject.email;
    }
    if (newPassword.length > 0) {
      if (newPassword !== repeatPassword) {
        toast.error("Passwords dont match !!!");
        return;
      }
    }
    if (!isEmpty(payload)) {
      dispatchUpdate(payload);
    }
  }, [userObject, userDetails, newPassword, repeatPassword, dispatchUpdate]);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    if (id === "password") {
      setNewPassword(value);
    }
    if (id === "repeatPassword") {
      setRepeatPassword(value);
    } else {
      setUserObject((userObj) => ({
        ...userObj,
        [id]: value,
      }));
    }
  }, []);

  const handleProfileUpload = useCallback(
    (e) => {
      if (e?.target?.files?.length > 0) {
        uploadUserProfile(e.target.files[0], userDetails._id).then((res) => {
          if (res.ok) {
            toast.success("Profile Image Updated");
            getUserDetailsDispatchAction();
          } else {
            toast.error("Failed to upload profile image");
          }
        });
      }
    },
    [userDetails, getUserDetailsDispatchAction]
  );

  const handleCancelSubscription = useCallback(async () => {
    const cancelResponse = await cancelUserPremiumSubscription();
    if (cancelResponse.ok) {
      toast.success("Subscription cancelled successfully");
      getUserDetailsDispatchAction();
    } else {
      toast.error("Failed to cancel subscription");
    }
  }, [getUserDetailsDispatchAction]);

  return (
    <SettingsComponent
      profileIsOpen={profileIsOpen}
      accountIsOpen={accountIsOpen}
      paymentIsOpen={paymentIsOpen}
      subscriptionIsOpen={subscriptionIsOpen}
      toggleProfile={() => toggleProfile((e) => !e)}
      toggleAccount={() => toggleAccount((e) => !e)}
      togglePayment={() => togglePayment((e) => !e)}
      toggleSubscription={() => toggleSubscription((e) => !e)}
      cancelSubscription={handleCancelSubscription}
      details={userDetails}
      userObject={userObject}
      paymentMethods={paymentMethods}
      onInputChange={handleInputChange}
      logOutClick={handleLogoutClick}
      password={newPassword}
      repeatPassword={repeatPassword}
      handleProfileUpdate={handleProfileUpdate}
      handleProfileUpload={handleProfileUpload}
    />
  );
};

const dispatchAction = (dispatch) => ({
  getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
  dispatchUpdate: (payload) => dispatch(updateUserData(payload)),
  getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
});

export default connect(
  (state) => ({
    ...preferencsSelector(state),
    paymentMethods: userSelector(state).paymentMethods,
  }),
  dispatchAction
)(SettingsContainer);
