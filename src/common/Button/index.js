import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, buttonText }) => {
    return <button className={className} onClick={onClick}>{buttonText}</button>
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Button;