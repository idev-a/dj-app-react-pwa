import React, { Component, useState } from 'react';
import {useScript} from "../../hooks";
import Autocomplete from 'react-google-autocomplete';
import {Icon, Input} from "antd";


export const LocationSearch = props => {
    const [state, setState] = useState(null);
    console.log(state)
    return (
        <Autocomplete
            style={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            onPlaceSelected={props.handleChange}
            types={['(cities)']}
            input={Input}
            suffix={<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
    )
}