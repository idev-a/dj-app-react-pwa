import React, { useCallback } from 'react';
import './style.scss';
import { ClickAwayListener } from '@material-ui/core';
import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';


const DialogBox = ({ onClose, bodyComponent, hideClose }) => {

    const handleOnClose = useCallback(() => {
        if (onClose) {
            onClose(false);
        }
    }, [onClose])

    return (
        <div className="dialog-main-container">
            <ClickAwayListener onClickAway={handleOnClose}>
                <div className="dialog-container">
                    {!hideClose && <CloseIcon className="close-icon" onClick={handleOnClose} />}<br />
                    {bodyComponent}
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default DialogBox;