import React, {useState} from "react";
import {Input} from "antd";

export const DatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return <div className={"flex-center fields-section"}>
        <Input placeholder={'MM'} />
        <Input placeholder={'DD'} />
        <Input placeholder={'YYYY'} />
    </div>
}
