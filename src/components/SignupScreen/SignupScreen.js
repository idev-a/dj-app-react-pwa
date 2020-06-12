import React from 'react'
import "./SignupScreen.styles.scss";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import content from './content'

const SignupScreen = ({emailClick, signupClick, phoneClick}) => {
    return(
        <div className="signupContainer">
            <ArrowBackIosIcon className="signupheadericon" onClick={signupClick}/>
            <div className="signupBox">
                <p className="signupHeading">{content.SIGN_UP}</p>
                <div className="buttonBox">
                    <button className="facebookButton"><FacebookIcon/>{content.USE_FB}</button>
                    <br/>
                    <button className="emailButton" onClick={emailClick}><EmailIcon/>{content.USE_EMAIL}</button>
                    <br/>
                    <button className="phoneButton" onClick = {phoneClick}><PhoneIcon/>{content.USE_PHONE}</button>
                </div>
            </div>
        </div>
    )
}

export default SignupScreen