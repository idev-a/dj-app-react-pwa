import React from 'react'
import './NewPassword.styles.scss'
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

const NewPassword = ({ resetSignInBack, resetSignInClose, onInputChange, password, repeatPassword, handleResetPasswordClick, }) => {
    const [values, setValues] = React.useState({
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <div className="email-new-pass-container">
            <div className="new-pass-inner-container">
                <ArrowBackIosIcon className="new-pass-header-icon" onClick={resetSignInBack} />
                <p className="new-pass-heading">{content.REST_PASSWORD}</p>
                <CloseIcon className="new-pass-header-icon" onClick={resetSignInClose} />
            </div>
            {/* <hr className="new-pass-underline" /> */}
            <div className="new-pass-emailBox">
                <p className="new-pass-emailBoxHeading">{content.CHANGE_YOUR} <br /> {content.PASSWORD}</p>
                <div className="new-pass-form-container" >
                    <FormControl className="form-input" variant="outlined">
                        <InputLabel htmlFor="outlined-new-password">{content.NEW_PASSWORD}</InputLabel>
                        <OutlinedInput
                            required
                            onChange={onInputChange}
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={password}
                            autoComplete="off"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility color="secondary" /> : <VisibilityOff className="toggleIconNewPass" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControl className="form-input" variant="outlined">
                        <InputLabel htmlFor="outlined-confirm-password">{content.CONFIRM_PASSWORD}</InputLabel>
                        <OutlinedInput
                            required
                            onChange={onInputChange}
                            id="repeatPassword"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={repeatPassword}
                            autoComplete="off"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showConfirmPassword ? <Visibility color="secondary" /> : <VisibilityOff className="toggleIconNewPass" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <button className="new-passButton" onClick={handleResetPasswordClick} >{content.CHANGE_PASSWORD}</button>
                </div>
            </div>
        </div>
    )
}

export default NewPassword