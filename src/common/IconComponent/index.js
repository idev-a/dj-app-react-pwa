import React from 'react';
import PropTypes from 'prop-types';

const IconComponent = ({ className, iconName }) => {
    const style = {
        background: `url('../../img/${iconName}.png') no-repeat`,
        backgroundSize: 'contain',
    };
    return <div style={style} className={className}></div>
};

IconComponent.propTypes = {
    className: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
};

export default IconComponent;