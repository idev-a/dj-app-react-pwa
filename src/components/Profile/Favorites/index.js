import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/IconComponent";

const Favorites = ({
    editIsOpen,
    genres,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <section className="formContainer">              
            <header onClick={() => setIsOpen(!isOpen)} className="formHeaderContainer">
                <span className="expandIcon">
                    {!isOpen ? "+" : "-"}
                </span>
                <div className="formHeaderText">
                    {content.FAVORITES}
                </div>
            </header>
            {isOpen && (
                <div className="formBodyContainer">            
                    {/* <div className="formInputContainer">
                        {editIsOpen && (
                            <Icon className="addCircleGreenIcon" iconName="AddCircleGreen" />
                        )}
                        <label htmlFor="favoriteArtists" className="formInputLabel">
                            {content.FAVORITE_ARTISTS}
                        </label>
                        <div className="favoritesContainer">
                            <span className="favorites">Jay-Z</span>
                        </div>
                    </div> */}
                    <div className="formInputContainer">
                        {/* {editIsOpen && (
                            <Icon className="addCircleGreenIcon" iconName="AddCircleGreen" />
                        )} */}
                        <label htmlFor="favoriteGenres" className="formInputLabel">
                            {content.FAVORITE_GENRES}
                        </label>
                        <div className="favoritesContainer">
                            {genres?.map(genre => <span className="favorites">{genre.name}</span>)}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Favorites;