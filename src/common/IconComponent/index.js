import React from 'react';

const IconComponent = ({ className, iconName }) => {
    const style = {
        background: `url('../../img/${iconName}.png') no-repeat`,
        backgroundSize: "contain",
    };
    return <div style={style} className={className}></div>
};

export default IconComponent;