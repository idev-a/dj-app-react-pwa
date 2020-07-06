import React from 'react'
import './PhoneSignin.styles.scss'
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import {countries} from '../../utils'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

const PhoneSignin = ({phonesigninbackClick, phonesignincloseClick, onNextsigninClick}) => {
    const classes = useStyles();

    const phoneSigninBack = () => {
        phonesigninbackClick()
    }

    const phoneSigninClose = () => {
        phonesignincloseClick()
    }

    const handlesigninphonepage = () => {
        onNextsigninClick()
    }
    return(
        <div className="phonesignincontainer">
            <div className="phonesignininnercontainer">
                <ArrowBackIosIcon className="phonesigninheadericon" onClick={phoneSigninBack}/>
                <p className="phonesigninheading">Sign In</p>
                <CloseIcon className="phonesigninheadericon" onClick={phoneSigninClose}/>
            </div>
            {/* <hr className="phonesigninunderline"/> */}
            <div className="phonesigninBox">
                <p className="phonesigninBoxHeading">Enter Your <br/> Phone Number</p>
                <form className="phonesigninform-container" autoComplete="off">
                    <div className="phonesignininnercontainer">
                    <Autocomplete
                    id="country-select-demo"
                    className="form-input"
                    style={{ width: 200, marginRight: 10 }}
                    options={countries}
                    classes={{
                        option: classes.option,
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(option) => (
                        <React.Fragment>
                        <span>{countryToFlag(option.code)}</span>
                        {option.label} ({option.code}) +{option.phone}
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Choose a country"
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        />
                    )}
                    />
                    <TextField
                    id="outlined-name"
                    label="Phone Number"
                    defaultValue=""
                    variant="outlined"
                    style={{ width: 400 }}
                    className="form-input"
                    />
                    </div>
                    <p className="phonesignindescription">"Enter your phone number<br/> to recieve a text code  that you will<br/> use to sign in to your account"</p>
                    <button className="phonesigninButton" onClick={handlesigninphonepage}>Next</button>
                </form>
            </div>
        </div>
    )
}

export default PhoneSignin