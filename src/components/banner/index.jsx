import React from "react";
import { Typography } from "antd";
import BackArrowIcon from "../common/BackArrowIcon";


const { Title, Text,  } = Typography;

export const Banner = (props) => {
    return (
        <div className="full-width svg-banner">
            <BackArrowIcon />
            <Title level={4} className={'banner-title'}>Listener Preferences</Title>
            <div>
                <Text className={'page-indicator'}>1/5</Text>
            </div>
        </div>
    )
}
