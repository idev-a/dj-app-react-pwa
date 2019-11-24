import React from "react";
import Popup from "reactjs-popup";
import { Typography } from "antd";
import CloseIcon from '../../assets/img/addtohomescreen/closeIcon.png'

const { Text,  } = Typography;

export const PopUp = (props) => {
    return (
        <Popup trigger={props.trigger}
            open={props.open}
            modal
            contentStyle={{width: '336px', borderRadius: '20px'}}
            closeOnDocumentClick>
            <div className="modal">
                <div className={'modalHeader'}>
                    <Text className={'cardSectionHeaderTitle'}>{props.title}</Text>
                    <div role="button" onClick={props.closeClick}>
                        <img src={CloseIcon} className="closeIcon"/>
                    </div>
                </div>
                <div className="modalBody">
                    {props.children}
                </div>
            </div>
        </Popup>
    )
}
