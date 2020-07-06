import React from 'react'
import "./LoginScreen.styles.scss";
import content from "./content";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const LoginScreen = ({loginBack, handleSignIn, handlephoneSignIn}) => {
    const backclick = () => {
        loginBack()
    }

    const handleSignInScreen = () => {
        handleSignIn()
    }
    const handlePhoneScreen = () => {
        handlephoneSignIn()
    }
    return(
        <div className="logInContainer">
            <ArrowBackIosIcon className="loginheadericon" onClick={backclick}/>
            <div className="logInBox">
                <p className="logInHeading">{content.SIGN_IN_LABEL}</p>
                <div className="buttonBox">
                    {/* <button className="facebookButton"><FacebookIcon/>{content.USE_FACEBOOK}</button>
                    <br/> */}
                    <button className="emailButton" onClick={handleSignInScreen}><EmailIcon/>{content.USE_EMAIL}</button>
                    {/* <br/>
                    <button className="phoneButton" onClick = {handlePhoneScreen}><PhoneIcon/>{content.USE_PHONE}</button> */}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen