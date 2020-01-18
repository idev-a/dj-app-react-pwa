import React, { Component } from 'react';
import { connect } from "react-redux";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { 
    updateUserInfo 
} from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";
import api, { genericHeaders } from "../../config";

class SettingsContainer extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        console.log('hi');
        console.log(this.props.user);
        const getUserDataURI = "/settings";
        fetch(`${api}${getUserDataURI}`, {
            method: "GET",
            header: genericHeaders(),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
        this.setState({
            data: []
        });
    }
    
    render() {
        return (
            <SettingsComponent />
        );
    }
};

const mapStateToProps = (state) => ({
    user: userSelector(state)
});

const mapActions = (dispatch) => ({
    updateUser: (requestData) => dispatch(updateUserInfo(requestData))
});

export default connect (
    mapStateToProps,
    mapActions
)(SettingsContainer);