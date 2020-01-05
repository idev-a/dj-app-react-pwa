import React, { Component } from 'react';
import { connect } from "react-redux";
import ListenerPreferencesComponent from '../../components/ListenerPreferences/ListenerPreferencesComponent';

class ListenerPreferencesContainer extends Component {
    state = {
        hitRequestBox: false,
        proRequestBox: false,
        toggle: "closed",
        covered: ""
    };

    handleClickRequestBoxes = (e) => {
        const el = e.target;
        if (el.id === "hitRequestBox") {
            this.setState({
                hitRequestBox: !this.state.hitRequestBox
            })
        } else {
            this.setState({
                proRequestBox: !this.state.proRequestBox
            })
        }
    }

    handleClickMenuToggle = (e) => {
        if (this.state.toggle === "closed") {
            this.setState({
                toggle: "open",
                covered: "covered"
            })
        } else {
            this.setState({
                toggle: "closed",
                covered: ""
            })
        }
    }

    render() {
        return (
            <ListenerPreferencesComponent 
                handleClickRequestBoxes={this.handleClickRequestBoxes}
                hitRequestBox={this.state.hitRequestBox}
                proRequestBox={this.state.proRequestBox}
                toggle={this.state.toggle}
                covered={this.state.covered}
            />
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapActions = (dispatch) => ({

});

export default connect (
    mapStateToProps,
    mapActions
)(ListenerPreferencesContainer);