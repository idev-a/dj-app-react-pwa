import React from "react";
import Popup from "reactjs-popup";
import { Typography, Icon } from "antd";

const { Text,  } = Typography;

export const MessagePopUp = (props) => {

    return (
        <Popup
            open={props.open}
            modal
            contentStyle={{width: '336px', borderRadius: '20px'}}
            closeOnDocumentClick>
            <div className="modal">
                <div className={'modalHeader'}>
                    <Text className={'cardSectionHeaderTitle'}>{props.title}</Text>
                </div>
                <div className="modalBody">
                    <div className="errorPayment">
                        <Icon type={props.type? 'check-circle':'close-circle' } style={{fontSize: 24,color: 'red'}}></Icon>
                        <div className={'marginTop15'} dangerouslySetInnerHTML={{__html: props.text}}></div>
                    </div>
                </div>
            </div>
        </Popup>
    )
}
