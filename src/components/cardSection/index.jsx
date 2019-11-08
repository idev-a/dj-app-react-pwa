import React from "react";
import {Typography} from "antd";

const { Title, Text,  } = Typography;

export const CardSection = (props) => {
    return (
        <div className={'cardSection'}>
            <div className={'cardSectionHeader'}>
                <Text className={'cardSectionHeaderTitle'}>{props.title}</Text>
            </div>
            <div className={'cardSectionBoady'}>
                {props.children}
            </div>
        </div>
    )
}
