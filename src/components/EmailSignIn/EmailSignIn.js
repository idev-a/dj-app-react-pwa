import React from 'react'
import './EmailSignIn.styles.scss'
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import content from './contents'

const EmailSignIn = ({emailSigninBack, emailSigninClose, emailSignupPage, emailresetPassword, onInputChange, email, password, loginUser}) => {
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return(
        <div className="emailSigninContainer">
            <div>
                <div className="signinInnerContainer">
                    <ArrowBackIosIcon className="signinHeaderIcon" onClick={emailSigninBack}/>
                    <p className="signinHeading">{content.LOGIN_LABEL}</p>
                    <CloseIcon className="signinHeaderIcon" onClick={emailSigninClose}/>
                </div>
                {/* <hr className="signinUnderline"/> */}
            </div>
            <div className="signinEmailBox">
                <p className="signinEmailBoxHeading">{content.HELLO}<br/>{content.WELCOME_BACK}</p>
                <div className="signinform-container">
                    <TextField
                    required
                    id="email"
                    label={content.EMAIL}
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    className="form-input"
                    autoComplete="off"
                    value={email}
                    onChange={onInputChange}
                    />
                    <FormControl className="form-input" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">{content.PASSWORD}</InputLabel>
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
                    <p className="forgetText" onClick={emailresetPassword}><a>{content.FORGOT_PASSWORD}?</a></p>
                    <button className="signinButton" onClick={loginUser} >{content.LOGIN_LABEL}</button>
                    <p className="signinFooterText">Don't have an account? <a onClick={emailSignupPage}>{content.SIGN_UP}</a></p>
                </div>
            </div>
        </div>
    )
}

export default EmailSignIn