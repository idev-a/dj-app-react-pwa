import React from 'react';
import './style.scss';
import { ClickAwayListener } from '@material-ui/core';
import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';


const DialogBox = ({onClose, bodyComponent}) => {
    return (
        <div className="dialog-main-container">
            <ClickAwayListener onClickAway={() => onClose(false)}>
                <div className="dialog-container">
                    <svg className="close-icon" onClick={() => onClose(false)}><CloseIcon /></svg><br />
                    {bodyComponent}
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default DialogBox;