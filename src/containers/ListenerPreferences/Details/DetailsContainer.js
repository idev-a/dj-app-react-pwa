import React, { Component } from 'react';
import { connect } from "react-redux";
import DetailsForm from "../../../components/ListenerPreferences/DetailsForm";

class DetailsContainer extends Component {
    state = {
        genresList: false,
        tagsList: false,
        genresAdded: [],
        tagsAdded: []
    };

    handleClickToggleAddList = (e, type) => {
        if (type === "genres") {
            this.setState({
                genresList: !this.state.genresList,
                tagsList: false
            });
        } else {
            this.setState({
                genresList: false,
                tagsList: !this.state.tagsList
            });
        }
    }

    handleClickAddGenres = (e, genre) => {
        if (!this.state.genresAdded.includes(genre)) {
            const newList = this.state.genresAdded.concat(genre);
            this.setState({
                genresAdded: newList
            })
        } else {
            const newList = this.state.genresAdded.filter(index => index !== genre);
            this.setState({
                genresAdded: newList
            })
        }
    }

    handleClickAddTags = (e, tag) => {
        if (!this.state.tagsAdded.includes(tag)) {
            const newList = this.state.tagsAdded.concat(tag);
            this.setState({
                tagsAdded: newList
            })
        } else {
            const newList = this.state.tagsAdded.filter(index => index !== tag);
            this.setState({
                tagsAdded: newList
            })
        } 
    }

    render() {
        return (
            <DetailsForm 
                handleClickToggleAddList={this.handleClickToggleAddList}
                handleClickAddGenres={this.handleClickAddGenres}
                handleClickAddTags={this.handleClickAddTags}
                genresList={this.state.genresList}
                tagsList={this.state.tagsList}
                genresAdded={this.state.genresAdded}
                tagsAdded={this.state.tagsAdded}
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
)(DetailsContainer);