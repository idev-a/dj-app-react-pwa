import React from "react";

const BackArrowIcon = ({ className, fill }) =>
    (<div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="19.586" height="18.869" viewBox="0 0 19.586 18.869">
            <path id="Back" d="M20,11.25a2.812,2.812,0,0,0-2.5-2.5H4.813l5.219-5.219A2.79,2.79,0,0,0,10,0h0L.707,9.293a1,1,0,0,0,0,1.414L8.25,18.25a2.784,2.784,0,0,0,3.5,0h0l-6.937-7H17.5A2.812,2.812,0,0,0,20,8.75Z" transform="translate(-0.414)" fill={fill} />
        </svg>
    </div>);

export default BackArrowIcon;
