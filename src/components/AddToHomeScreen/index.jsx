import React from 'react';
import AddToHomeScreenIcon from '../../assets/img/addtohomescreen/add-to-home-screen-icon.png';
import CloseIcon from '../../assets/img/addtohomescreen/closeIcon.png';
import HearBKIcon from '../../assets/img/addtohomescreen/hearbk-icon.png';

const AddToHomeScreen = ({ closeClick }) => {
    return <div className="addtohomescreen-container">
        <div>
            <img src={HearBKIcon} className="hearbkicon"/>
        </div>
        <div className="captionWrapper">
            <div className="title">H E A R B K</div>
            <div className="website">hearbk.com</div>
            <div className="addToHomeScreenCaption">
                Tap <img src={AddToHomeScreenIcon} className="addToHomeScreenIcon"></img> then select <span className="addToHomeScreenText">Add To Home Screen</span> to install this app on you device
            </div>
        </div>
        <div role="button" onClick={closeClick}>
            <img src={CloseIcon} className="closeIcon"/>
        </div>
    </div>
}

export default AddToHomeScreen;