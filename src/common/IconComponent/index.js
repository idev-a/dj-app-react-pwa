import React from 'react';

const IconComponent = ({ className, iconName }) => {
    const Icon = React.lazy(() => import (`./public/${iconName}.svg`));
    return <React.Suspense fallback={<div></div>}>
                <Icon />
            </React.Suspense>
};

export default IconComponent;