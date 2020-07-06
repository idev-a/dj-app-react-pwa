import React from 'react'
import './EmailResetPassword.styles.scss'
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';

const EmailResetPassword = ({ setNewPassword, emailLoginBack, resetBack, resetClose, email, onInputChange, handleSubmitClick }) => {
    return (
        <div className="emailResetContainer">
            <div className="resetInnerContainer">
                <ArrowBackIosIcon className="resetHeaderIcon" onClick={resetBack} />
                <p className="resetheading">Reset Password</p>
                <CloseIcon className="resetHeaderIcon" onClick={resetClose} />
            </div>
            {/* <hr className="resetUnderline" /> */}
            <div className="resetEmailBox">
                <p className="resetEmailBoxHeading">Forgot Your <br /> Password?</p>
                <p className="resetDescription">"Don't worry! Resetting your password <br /> is easy. Just type in the email you<br /> registered here."</p>
                <div className="resetform-container">
                    <TextField
                        required
                        onChange={onInputChange}
                        name="email"
                        id="outlined-email"
                        label="Email"
                        value={email}
                        type="email"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        autoComplete="off"
                    />
                    <button className="resetButton" onClick={handleSubmitClick}>Reset</button>
                    <p className="resetFooterText">Remebered you password? <a onClick={emailLoginBack}>Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default EmailResetPassword