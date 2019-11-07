import React, {useState} from "react";
import {Input} from "antd";

export const DatePicker = ( props) => {
    const {month, day, year} = props.dob
    const handleMM = props.handleChange('month')
    const handleDD = props.handleChange('day')
    const handleYYYY = props.handleChange('year')
    return <div className={"flex-center fields-section"}>
        <Input placeholder={'MM'}
               value={month}
               onChange={ ({target: {value}}) => {
            handleMM(value)
        }} />
        <Input placeholder={'DD'}
               value={day}
               onChange={({target: {value}}) => {
                   handleDD(value)
               }}/>
        <Input placeholder={'YYYY'}
               value={year}
               onChange={({target: {value}}) => {
                   handleYYYY(value)
               }}/>
    </div>
}
