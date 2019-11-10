import React from "react";
import {Typography} from "antd";

const { Title, Text,  } = Typography;

export const TextSection = (props) => {
    return (
    <div className={'title15'} style={{paddingTop: props.paddingTop, paddingBottom: props.paddingBottom}} >
        <Text className={'title15Text'} style={{fontSize: props.size, color: props.color, fontWeight: props.weight}}>{props.text}</Text>
    </div>
    )
}
