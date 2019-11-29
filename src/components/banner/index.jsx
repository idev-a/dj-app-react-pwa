import React from "react";
import { Typography } from "antd";
import BackArrowIcon from "../common/BackArrowIcon";


const { Title, Text,  } = Typography;

export const Banner = (props) => {
    return (
        <div className="full-width svg-banner">
            <BackArrowIcon fill="#fff" />
            <Title level={4} className={'banner-title'}>{props.title}</Title>
            <div>
                <Text className={'page-indicator'}>{props.subtitle}</Text>
            </div>
        </div>
    )
}
