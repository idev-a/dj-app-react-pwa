import React, { useCallback, useState, useEffect } from 'react';
import './Onboard.styles.scss';
import content from './content'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import AutoComplete from "react-google-autocomplete";
import InputMask from "react-input-mask";
import InputField from './../../common/InputField';
import { ReactComponent as PlusIcon } from '../../assets/icon/IconPlusSquare.svg';
import { ReactComponent as MinusIcon } from '../../assets/icon/IconMinusSquare.svg';
import { ReactComponent as IconPlusCircle } from '../../assets/icon/Icon feather-plus-circle.svg'
import { ReactComponent as IconCloseCircle } from '../../assets/icon/Icon feather-close-circle.svg'
import Button from './../../common/Button/index';


const OnboardComponent = ({
    onInputChange,
    handleGenderChange,
    city,
    dob,
    gender,
    genresList,
    tagsList,
    genres,
    tags,
    styles,
    genresAdded,
    stylesAdded,
    tagsAdded,
    handleClickAddGenres,
    handleClickAddStyles,
    handleClickAddTags,
    handleButtonClick
}) => {

    const [addGenres, setAddGenres] = useState(false);
    const [addRole, setAddRoles] = useState(false);
    const [addStyles, setAddStyles] = useState(false);

    const [filteredGenres, setFilteredGenres] = useState([]);
    const [filteredRoles, setFilteredRoles] = useState([]);
    const [filteredStyles, setFilteredStyles] = useState([]);

    useEffect(() => {
        setFilteredGenres(genres);
        setFilteredRoles(tags);
        setFilteredStyles(styles);
    }, [genres, tags, styles])

    const handleOnToggleGenres = useCallback(() => {
        setAddGenres(!addGenres);
    }, [setAddGenres, addGenres])

    const handleOnToggleRole = useCallback(() => {
        setAddRoles(!addRole);
    }, [setAddRoles, addRole])

    const handleOnToggleStyles = useCallback(() => {
        setAddStyles(!addStyles);
    }, [setAddStyles, addStyles])

    const onRoleSearch = useCallback((e) => {
        let data = tags.filter((element) => {
            return element.tag.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setAddRoles(true);
        setFilteredRoles(data);
    }, [tags])

    const onSearchGenres = useCallback((e) => {
        let data = genres.filter((element) => {
            return element.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setAddGenres(true);
        setFilteredGenres(data);
    }, [genres])

    const onSearchStyles = useCallback((e) => {
        let data = styles.filter((element) => {
            return element.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setAddStyles(true);
        setFilteredStyles(data);
    }, [styles])

    const handleSelectRoles = useCallback((element, condition) => {
        const indexOf = tagsAdded.indexOf(element)
        if(indexOf < 0 && !condition) {
            handleClickAddTags(element, condition);
        } else if ( condition ){
            handleClickAddTags(element, condition);
        }
    }, [handleClickAddTags, tagsAdded])

    const handleSelectGenres = useCallback((element, condition) => {
        const indexOf = genresAdded.indexOf(element)
        if(indexOf < 0 && !condition) {
            handleClickAddGenres(element, condition);
        } else if ( condition ){
            handleClickAddGenres(element, condition);
        }
    }, [handleClickAddGenres, genresAdded])

    const handleSelectStyles = useCallback((element, condition) => {
        const indexOf = stylesAdded.indexOf(element)
        if(indexOf < 0 && !condition) {
            handleClickAddStyles(element, condition);
        } else if ( condition ){
            handleClickAddStyles(element, condition);
        }
    }, [handleClickAddStyles, stylesAdded])


    return (
        <div className="onboard-container">
            <div className="logo-main-container">
                <div className="logo-container" />
            </div>
            <div className="onboard-welcome-msg-container">
                <span className="onboard-welcome-msg">{content.NO_TWO_MONGULS}</span><br />
                <span className="onboard-welcome-msg">{content.ARE_ALIKE}</span><br />
            </div>
            <div className="onboard-msg-2-container">
                <span className="onboard-msg-2">{content.THIS_WILL_HELP}</span><br />
                <span className="onboard-msg-2">{content.RIGHT_MUSIC}</span><br />
            </div>
            <div className="gender-container">
                <FormControl component="fieldset" className="radio-container">
                    <FormLabel component="legend">{content.GENDER}</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="non-binary" control={<Radio />} label="Non-Binary" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="text-container">
                <span className="text-label">{content.LOCATION}</span>
                <AutoComplete
                    id="city"
                    className="formInputField"
                    onPlaceSelected={(e) => {
                        onInputChange({
                            id: "location",
                            city: e.formatted_address,
                        });
                    }}
                    onChange={onInputChange}
                    value={city}
                    types={["(cities)"]}
                    placeholder={content.CHOOSE_CITY}
                // disabled={disabled}
                />
            </div>
            <div className="text-container">
                <span className="text-label">{content.DOB}</span>
                <InputMask
                    id="dob"
                    className="formInputField"
                    maskChar=""
                    maskPlaceholder=""
                    mask="99-99-9999"
                    value={dob}
                    onChange={onInputChange}
                    placeholder={content.MM_DD_YYYY}
                // disabled={disabled}
                />
            </div>
            <div className="genres-container">
                <span className="genres-label">{content.ROLES}</span>
                <div className="search-genres-container">
                    <InputField
                        id="roles"
                        className="formInputField"
                        onChange={onRoleSearch}
                        placeholder={content.SEARCH_ROLE}
                    />
                    <div className="icon-container" onClick={handleOnToggleRole} >
                        {addRole ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </div>
                <div className="genres-button-container">
                    {tagsAdded.length > 0 && tagsAdded.map(element => {
                        return <div className="genres-added-button" >
                            {element.tag}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectRoles(element, true)} ><IconCloseCircle /></div>
                        </div>
                    })}
                </div>
                <div className="genres-button-container">
                    {(filteredRoles.length > 0 && addRole) && filteredRoles.map(element => {
                        return <div className="genres-button" >
                            {element.tag}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectRoles(element, false)} ><IconPlusCircle /></div>
                        </div>
                    })}
                </div>
            </div>
            <div className="genres-container">
                <span className="genres-label">{content.GENRES}</span>
                <div className="search-genres-container">
                    <InputField
                        id="genres"
                        className="formInputField"
                        onChange={onSearchGenres}
                        placeholder={content.SEARCH_GENRES}
                    />
                    <div className="icon-container" onClick={handleOnToggleGenres}>
                        {addGenres ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </div>
                <div className="genres-button-container">
                    {genresAdded.length > 0 && genresAdded.map(element => {
                        return <div className="genres-added-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectGenres(element, true)} ><IconCloseCircle /></div>
                        </div>
                    })}
                </div>
                <div className="genres-button-container">
                    {(filteredGenres.length > 0 && addGenres) && filteredGenres.map(element => {
                        return <div className="genres-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectGenres(element, false)} ><IconPlusCircle /></div>
                        </div>
                    })}
                </div>
            </div>
            <div className="genres-container">
                <span className="genres-label">{content.STYLES}</span>
                <div className="search-genres-container">
                    <InputField
                        id="styles"
                        className="formInputField"
                        onChange={onSearchStyles}
                        placeholder={content.SEARCH_STYLES}
                    />
                    <div className="icon-container" onClick={handleOnToggleStyles}>
                        {addStyles ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </div>
                <div className="genres-button-container">
                    {stylesAdded.length > 0 && stylesAdded.map(element => {
                        return <div className="genres-added-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectStyles(element, true)} ><IconCloseCircle /></div>
                        </div>
                    })}
                </div>
                <div className="genres-button-container">
                    {(filteredStyles.length > 0 && addStyles) && filteredStyles.map(element => {
                        return <div className="genres-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={(e) => handleSelectStyles(element, false)} ><IconPlusCircle /></div>
                        </div>
                    })}
                </div>
            </div>
            <div className="button-wrapper">
                <Button
                    className="continue-button"
                    buttonText={content.CONTINUE}
                    onClick={handleButtonClick}
                />
            </div>
            <div className="progress-bar">
                <div />
                <div className="bar-1" />
                <div />
            </div>
        </div>
    )
};

export default OnboardComponent;