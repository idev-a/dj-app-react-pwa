import React from "react";
import {Typography} from "antd";

const { Title, Text,  } = Typography;

export const BannerWithSub = (props) => {
    return (
            <div className="bannerWrapper svg-banner-long ">
                <Title level={4} className={'banner-title'}>Submit a Hit</Title>
                <Text className={'bannerTitle'}>Let get your music heard!</Text>
            </div>
    )
}
