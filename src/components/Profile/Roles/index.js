import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";

const Roles = ({
    tags
}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section className="formContainer">              
            <header onClick={() => setIsOpen(!isOpen)} className="formHeaderContainer">
                <span className="expandIcon">
                    {!isOpen ? "+" : "-"}
                </span>
                <div className="formHeaderText">
                    {content.ROLES}
                </div>
            </header>
            {isOpen && (
                <div className={"disabledRolesContainer"}>
                    {tags?.map(tag =><span className="roles">
                        {tag.tag}
                    </span>)}
                </div>
            )}
        </section>
    );
};

export default Roles;