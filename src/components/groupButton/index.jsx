import React from "react";
import {Typography} from "antd";

const { Title, Text,  } = Typography;

export const GroupButton = (props) => {
    return (
        <div>
        <div className="groupButton">
            <div className={'groupButtonLeft'}>
                <Text className={'groupButtonText'}>HITS</Text>
            </div>
            <div className={'groupButtonRight groupButtonSelected'}>
                <Text className={'groupButtonText'}>PRO</Text>
            </div>
        </div>
        <div className={'groupButtonRatio'}>

        </div>
        </div>
    )
}
