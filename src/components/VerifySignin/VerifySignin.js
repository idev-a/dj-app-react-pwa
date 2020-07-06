import React from 'react'
import './VerifySignin.styles.scss'
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';

const VerifySignin = ({verifysigninbackClick, verifysignincloseClick }) => {

    const verifySigninBack = () => {
        verifysigninbackClick()
    }

    const verifySigninClose = () => {
        verifysignincloseClick()
    }
    return(
        <div className="verifysignincontainer">
            <div className="verifysignininnercontainer">
                <ArrowBackIosIcon className="verifysigninheadericon" onClick={verifySigninBack}/>
                <p className="verifysigninheading">Sign In</p>
                <CloseIcon className="verifysigninheadericon" onClick={verifySigninClose}/>
            </div>
            {/* <hr className="verifysigninunderline"/> */}
            <div className="verifysigninBox">
                <p className="verifysigninBoxHeading">Verify</p>
                <p className="verifysigninfootertext">"Enter the text code we have sent<br/> to +14048601543 below"</p>
                <form className="verifysigninform-container" autoComplete="off">
                <div className="verifysignininput">
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
                    <button className="verifysigninButton">Sign In</button>
                    <p className="verifysigninfootertext">Didn't get the code? <a>Resend</a></p>
                </form>
            </div>
        </div>
    )
}

export default VerifySignin