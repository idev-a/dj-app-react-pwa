import React, { useCallback, useState } from 'react';
import './profileSettings.style.scss'
import content from './content'
import moment from "moment";
import { ReactComponent as BackArrow } from '../../assets/icon/arrow.svg';
import { ReactComponent as CloseArrow } from '../../assets/icon/close-arow.svg';
import { ReactComponent as OpenArrow } from '../../assets/icon/open-arrow.svg';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import Button from './../../common/Button';
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PrivacyPolicy from './PrivacyPolicy';
import TermServices from './TermsServices';

const ProfileSettingsComponent = ({ logOutClick, userObject, password, repeatPassword, onInputChange, handleProfileUpdate, cancelSubscription, details }) => {
    const { subscriptionEndDate, balance } = details;
    const { display_name, email, newEmail } = userObject;
    const [showEmail, setShowEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [values, setValues] = useState({
        showPassword: false,
        confirmPassword: false,
    });

    const handleClickShowPassword = useCallback(() => {
        setValues({ ...values, showPassword: !values.showPassword });
    }, [values]);

    const handleClickShowConfirmPassword = useCallback(() => {
        setValues({ ...values, confirmPassword: !values.confirmPassword });
    }, [values])

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleOnToggleChangeEmail = useCallback(() => {
        setShowEmail(!showEmail);
    }, [showEmail, setShowEmail]);

    const handleOnToggleChangePassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword, setShowPassword]);

    const handleOnToggleTerms = useCallback(() => {
        setShowTerms(!showTerms);
    }, [showTerms, setShowTerms]);

    const handleOnTogglePrivacy = useCallback(() => {
        setShowPrivacy(!showPrivacy);
    }, [showPrivacy, setShowPrivacy]);

    const handleClickBack = () => {
        window.history.back();
    }

    return (
        <div className="profile-settings-container">
            <div className="settings-header-container">
                <div className="user-name-container">
                    <span className="user-display-name">{display_name || ""}</span><br />
                    <BackArrow className="back-arrow" onClick={handleClickBack} />
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">{balance || "0"}</p><p className="coin-text">coin</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.0</p><p className="coin-text">rator</p>
                    </div>
                </div>
            </div>
            <div className="version-main-container">
                <span className="version-header">{content.VERSION_HISTORY}</span>
                <span>Version 0.1 - Includes:</span>
                <div className="version-sub-cotent"><div className="dot" /><span>Login</span></div>
                <div className="version-sub-cotent"> <div className="dot" /><span>Password Reset</span></div>
                <div className="version-sub-cotent"><div className="dot" /><span>Uploading Tracks</span></div>
                <div className="version-sub-cotent"><div className="dot" /><span>Rating Tracks</span></div>
                <div className="version-sub-cotent"><div className="dot" /><span>Profile Editing</span></div>
            </div>
            <div className="accordian-container">
                <div className="header-main-container">
                    <div className="header-container" onClick={handleOnToggleChangeEmail}>
                        <span>{content.CHANGE_EMAIL}</span>
                        {showEmail ? <OpenArrow /> : <CloseArrow />}
                    </div>
                    {showEmail && <div className="accordian-content-container">
                        <TextField
                            id="email"
                            label={content.OLD_EMAIL}
                            type="email"
                            defaultValue=""
                            variant="outlined"
                            className="form-input"
                            autoComplete="off"
                            value={email}
                        />
                        <TextField
                            id="newEmail"
                            label={content.NEW_EMAIL}
                            type="email"
                            defaultValue=""
                            variant="outlined"
                            className="form-input"
                            autoComplete="off"
                            value={newEmail}
                            onChange={onInputChange}
                        />
                        <Button
                            className="update-button"
                            onClick={handleProfileUpdate}
                            buttonText={content.SAVE}
                        />
                    </div>}
                </div>
                <div className="header-main-container" >
                    <div className="header-container" onClick={handleOnToggleChangePassword}>
                        <span>{content.CHANGE_PASSWORD}</span>
                        {showPassword ? <OpenArrow /> : <CloseArrow />}
                    </div>
                    {showPassword && <div className="accordian-content-container" >
                        <FormControl className="form-input" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">{content.NEW_PASSWORD}</InputLabel>
                            <OutlinedInput
                                required
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={onInputChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility color="secondary" /> : <VisibilityOff className="toggleIconSignin" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl className="form-input" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">{content.CONFIRM_PASSWORD}</InputLabel>
                            <OutlinedInput
                                required
                                id="repeatPassword"
                                type={values.confirmPassword ? 'text' : 'password'}
                                value={repeatPassword}
                                onChange={onInputChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.confirmPassword ? <Visibility color="secondary" /> : <VisibilityOff className="toggleIconSignin" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <Button
                            className="update-button"
                            onClick={handleProfileUpdate}
                            buttonText={content.SAVE}
                        />
                    </div>}
                </div>
                <div className="header-main-container" >
                    <div className="header-container" onClick={handleOnToggleTerms}>
                        <span>{content.TERMS_AND_CONDITIONS}</span>
                        {showTerms ? <OpenArrow /> : <CloseArrow />}
                    </div>
                    {showTerms && <div className="accordian-content-container" >
                        <TermServices />
                    </div>}
                </div>
                <div className="header-main-container">
                    <div className="header-container" onClick={handleOnTogglePrivacy}>
                        <span>{content.PRIVACY_AND_POLICY}</span>
                        {showPrivacy ? <OpenArrow /> : <CloseArrow />}
                    </div>
                    {showPrivacy && <div className="accordian-content-container">
                        <PrivacyPolicy />
                    </div>}
                </div>
            </div>
            {subscriptionEndDate && <div className="subscription-main-container">
                <span className="cancel-subscription-text" onClick={cancelSubscription} >{content.CANCEL_SUBSCRIPTION}</span>
                <div>
                    <span className="subscription-date-text">{moment(subscriptionEndDate).format("YYYY/MM/DD")}</span> <br />
                    <span className="auto-renew-text">{content.AUTO_RENEW}</span>
                </div>
            </div>}
            <Button
                className="logout-button"
                onClick={logOutClick}
                buttonText={content.LOGOUT}
            />
            <a href="mailto:hearbkapp@gmail.com?subject=App inquiry" >
                <Button
                    className="contact-us-button"
                    buttonText={content.CONTACT_US}
                />
            </a>
        </div>
    )
};

export default ProfileSettingsComponent;