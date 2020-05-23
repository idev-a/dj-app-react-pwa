import React from 'react'
import './EmailSignup.styles.scss'
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
import content from './content';

const EmailSignup = ({
    emailBack,
    emailClose,
    emailPage,
    onInputChange,
    email,
    displayName,
    username,
    password,
    registerUser,
}) => {
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="email-signup-container">
            <div className="inner-container">
                <ArrowBackIosIcon className="header-icon" onClick={emailBack} />
                <p className="heading">{content.SIGN_UP}</p>
                <CloseIcon className="header-icon" onClick={emailClose} />
            </div>
            <hr className="underline" />
            <div className="emailBox">
                <p className="emailBoxHeading">{content.HELLO_CREATE} <br/>{content.YOUR_ACCOUNT}</p>
                <div className="form-container" autoComplete="off">
                    <TextField
                        id="displayName"
                        value={displayName}
                        label={content.FIRST_LAST_NAME}
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        autoComplete="off"
                        onChange={onInputChange}
                    />
                    <TextField
                        required
                        id="email"
                        value={email}
                        label={content.EMAIL}
                        type="email"
                        defaultValue=""
                        variant="outlined"
                        className="form-input"
                        autoComplete="off"
                        onChange={onInputChange}
                    />
                    <FormControl className="form-input" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">{content.PASSWORD}</InputLabel>
                        <OutlinedInput
                            required
                            id="password"
                            value={password}
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={onInputChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility color="secondary" /> : <VisibilityOff className="toggle-icon-signup" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <button className="signupButton" onClick={registerUser} >{content.SIGN_UP}</button>
                    <p className="footer-text">{content.HAVE_A_ACCOUNT} &nbsp; <a onClick={emailPage}>{content.SIGN_IN}</a></p>
                </div>
            </div>
        </div>
    )
}

export default EmailSignup