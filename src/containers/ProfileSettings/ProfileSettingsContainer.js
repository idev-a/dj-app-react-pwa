import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileSettingsComponent from './../../components/ProfleSettings/ProfileSettingsComponent';
import {
    getUserDetails,
    updateUserData,
    cancelUserPremiumSubscription,
} from "../../state/actions/userActions";
import { preferencsSelector } from "../../state/selectors/preferences";
import { validateRegex } from "../../utils";
import { toast } from "react-toastify";
import isEmpty from "lodash/isEmpty";

const ProfileSettingsContainer = ({
    getUserDetailsDispatchAction,
    userDetails,
    history,
    dispatchUpdate,
}) => {

    const [userObject, setUserObject] = useState({});
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    useEffect(() => {
        Promise.all([
            getUserDetailsDispatchAction(),
        ]);
    }, [getUserDetailsDispatchAction]);


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
        history.push("/");
    }, [history]);

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

    const handleCancelSubscription = useCallback(async () => {
        const cancelResponse = await cancelUserPremiumSubscription();
        if (cancelResponse.ok) {
            toast.success("Subscription cancelled successfully");
            getUserDetailsDispatchAction();
        } else {
            toast.error("Failed to cancel subscription");
        }
    }, [getUserDetailsDispatchAction]);

    const handleProfileUpdate = useCallback(() => {
        let payload = {};
        if (userObject?.newEmail?.length > 0 && userObject.newEmail !== userDetails.email) {
            if (!validateRegex("email", userObject.newEmail)) {
                toast.error("Invalid Email");
                return;
            }
            payload.email = userObject.newEmail;
        }
        if (newPassword.length > 0) {
            if (newPassword !== repeatPassword) {
                toast.error("Passwords dont match !!!");
                return;
            }
            payload.password = newPassword;
        }
        if (!isEmpty(payload)) {
            dispatchUpdate(payload);
        }
    }, [userObject, userDetails, newPassword, repeatPassword, dispatchUpdate]);

    return (
        <ProfileSettingsComponent
            logOutClick={handleLogoutClick}
            details={userDetails}
            userObject={userObject}
            password={newPassword}
            repeatPassword={repeatPassword}
            onInputChange={handleInputChange}
            handleProfileUpdate={handleProfileUpdate}
            cancelSubscription={handleCancelSubscription}
            validateEmail={validateEmail}
        />
    )
}


const dispatchAction = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    dispatchUpdate: (payload) => dispatch(updateUserData(payload)),
});

export default connect(
    (state) => ({
        ...preferencsSelector(state),
    }),
    dispatchAction
)(ProfileSettingsContainer);
