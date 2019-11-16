import React, { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import {Icon, Input} from "antd";


export const LocationSearch = props => {
    const [state] = useState(null);
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
            placeholder={'Enter your city'}
            suffix={<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
    )
}