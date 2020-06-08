import React, {useState, useCallback} from 'react';
import content from '../content';
import cx from "classnames";
import '../upload.style.scss';
import { ReactComponent as PlusIcon } from '../../../assets/icon/IconPlusSquare.svg';
import { ReactComponent as MinusIcon } from '../../../assets/icon/IconMinusSquare.svg';
import { ReactComponent as IconPlusCircle } from '../../../assets/icon/Icon feather-plus-circle.svg'
import { ReactComponent as IconCloseCircle } from '../../../assets/icon/Icon feather-close-circle.svg'
import InputField from '../../../common/InputField/index';

const GenresContainer = ({
    selectedGenre,
    genres,
    setAddGenre,
    selectedStyles,
    styles,
    setAddStyle,
}) => {
    const [addGenres, setAddGenres] = useState(false);
    const [addStyles, setAddStyles] = useState(false);

    const handleOnToggleGenres = useCallback(() => {
        setAddGenres(!addGenres);
    }, [addGenres]);

    const handleOnToggleStyles = useCallback(() => {
        setAddStyles(!addStyles);
    }, [addStyles]);

    return (
        <div className="genres-container">
            <span className="genres-label">{content.GENRES_STYLES}</span>
            {!selectedGenre && <div className="search-genres-container">
                <InputField
                    id="genres"
                    className="formInputField"
                    // onChange={onInputChange}
                    placeholder={content.SEARCH_GENRES}
                />
                <div className="icon-container" onClick={handleOnToggleGenres}>
                    {addGenres ? <MinusIcon /> : <PlusIcon />}
                </div>
            </div>}
            <div className={cx("genres-button-container", selectedGenre && "generes-container-border")}>
                {selectedGenre && <div className="genres-added-button">
                    {selectedGenre.name}
                    <div className="icon-plus-circle"/*  onClick={(e) => handleClickAddGenres(element, true)} */ ><IconCloseCircle /></div>
                </div>}
            </div>
            {!selectedGenre && <div className="genres-button-container">
                {(genres.length > 0 && addGenres) && genres.map(element => {
                    return <div className="genres-button">
                        {element.name}
                        <div className="icon-plus-circle" onClick={() => setAddGenre(element, 0)} ><IconPlusCircle /></div>
                    </div>
                })}
            </div>}
            {selectedGenre && <section>
                <div className="search-genres-container">
                    <InputField
                        id="styles"
                        className="formInputField"
                        // onChange={onInputChange}
                        placeholder={content.SEARCH_STYLES}
                    />
                    <div className="icon-container" onClick={handleOnToggleStyles}>
                        {addStyles ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </div>
                {<div className="genres-button-container">
                    {selectedStyles && <div className="genres-added-button">
                        {selectedStyles.name}
                        <div className="icon-plus-circle" /* onClick={(e) => handleClickAddStyles(element, true)} */ ><IconCloseCircle /></div>
                    </div>
                    }
                </div>}
                <div className="genres-button-container">
                    {(styles.length > 0 && addStyles) && styles.map(element => {
                        return <div className="genres-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={() => setAddStyle(element, 0)}><IconPlusCircle /></div>
                        </div>
                    })}
                </div>
            </section>
            }
        </div>
    )
}

export default GenresContainer;