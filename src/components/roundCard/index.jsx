import React from "react";
import {Typography} from "antd";

const { Title, Text,  } = Typography;

export const RoundCard = (props) => {
    return (
        <div className="roundCardContainer" style={{marginTop: props.top}}>
            {props.children}
        </div>
    )
}
