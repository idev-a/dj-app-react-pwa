import React from 'react'
import './VerifyPhone.styles.scss'
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';

const VerifyPhone = ({verifybackClick, verifycloseClick }) => {

    const verifySignupBack = () => {
        verifybackClick()
    }

    const verifySignupClose = () => {
        verifycloseClick()
    }
    return(
        <div className="verifysignupcontainer">
            <div className="verifyinnercontainer">
                <ArrowBackIosIcon className="verifyheadericon" onClick={verifySignupBack}/>
                <p className="verifyheading">Sign Up</p>
                <CloseIcon className="verifyheadericon" onClick={verifySignupClose}/>
            </div>
            {/* <hr className="verifyunderline"/> */}
            <div className="verifyBox">
                <p className="verifyBoxHeading">Verify</p>
                <p className="verifyfootertext">"Enter the text code we have sent<br/> to +14048601543 below"</p>
                <form className="verifyform-container" autoComplete="off">
                    <div className="verifyinput">
                        <TextField
                        style ={{width: 100}}
                        id="outlined-password"
                        type="password"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        inputProps={{ maxLength: 1, className:"input" }}
                        />
                        <TextField
                        style ={{width: 100}}
                        id="outlined-password"
                        type="password"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        inputProps={{ maxLength: 1, className:"input" }}
                        />
                        <TextField
                        style ={{width: 100}}
                        id="outlined-password"
                        type="password"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        inputProps={{ maxLength: 1, className:"input" }}
                        />
                        <TextField
                        style ={{width: 100}}
                        id="outlined-password"
                        type="password"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        inputProps={{ maxLength: 1, className:"input" }}
                        />
                    </div>
                    <button className="verifysignupButton">Sign Up</button>
                    <p className="verifyfootertext">Didn't get the code? <a>Resend</a></p>
                </form>
            </div>
        </div>
    )
}

export default VerifyPhone