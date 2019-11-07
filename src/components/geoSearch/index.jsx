// import Geosuggest from 'react-geosuggest';
import React, { Component, useState } from 'react';
import {useScript} from "../../hooks";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
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
            onPlaceSelected={ place =>  setState(place)}
            types={['(cities)']}
            input={Input}
            suffix={<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
    )
}